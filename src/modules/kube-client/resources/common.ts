import { AxiosError } from 'axios';

export type KubeResource = NamespacedResource | ClusterResource;

export interface IKubeResource {
  listPath(): string;
  namedPath(name: string): string;
}

export interface IGroupVersionKindPlural {
  group: string;
  version: string;
  kindPlural: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type TokenExpiryHandler = (oldToken: object) => void;

function namedPath(listPath: string, name: string) {
  return [listPath, name].join('/');
}

export abstract class NamespacedResource implements IKubeResource {
  public abstract gvk(): IGroupVersionKindPlural;
  public namespace: string;
  constructor(namespace: string) {
    if (!namespace) {
      throw new Error('NamespacedResource must be passed a namespace, it was undefined');
    }
    this.namespace = namespace;
  }

  public listPath(): string {
    return [
      '/apis',
      this.gvk().group,
      this.gvk().version,
      'namespaces',
      this.namespace,
      this.gvk().kindPlural,
    ].join('/');
  }

  public namedPath(name: string): string {
    return namedPath(this.listPath(), name);
  }
}

export abstract class ClusterResource implements IKubeResource {
  public abstract gvk(): IGroupVersionKindPlural;
  public listPath(): string {
    return ['/apis', this.gvk().group, this.gvk().version, this.gvk().kindPlural].join('/');
  }
  public namedPath(name: string): string {
    return namedPath(this.listPath(), name);
  }
}

export abstract class OAuthClient {
  private _token: string;
  private _tokenExpiryTime: number | null = null;
  private _tokenExpiryHandler: TokenExpiryHandler | null = null;

  constructor(token: string) {
    this._token = token;
  }

  public getOAuthHeader(): { Authorization: string } {
    return {
      Authorization: `Bearer ${this._token}`,
    };
  }

  public setTokenExpiryHandler(handler: TokenExpiryHandler, tokenExpiryTime: number): void {
    this._tokenExpiryHandler = handler;
    this._tokenExpiryTime = tokenExpiryTime;
  }

  public checkExpiry(err: AxiosError): void {
    if (err.response && err.response.status === 401) {
      this._tokenExpiryHandler && this._tokenExpiryHandler(this._oldToken());
    }
  }

  private _oldToken() {
    return {
      token: this._token,
      tokenExpiryTime: this._tokenExpiryTime,
    };
  }
}

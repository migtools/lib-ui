import { ClusterClient } from './client';
import { DiscoveryClient } from './discoveryClient';
import { ResponseType } from 'axios';
import { TokenExpiryHandler } from './resources/common';

export class ClientFactoryUnknownClusterError extends Error {
  constructor(clusterName: string) {
    super(`Unknown cluster requested: ${clusterName}`);
    Object.setPrototypeOf(this, ClientFactoryUnknownClusterError.prototype);
  }
}

export class ClientFactoryMissingUserError extends Error {
  constructor() {
    super('Current user missing from state tree');
    Object.setPrototypeOf(this, ClientFactoryMissingUserError.prototype);
  }
}

export class ClientFactoryMissingApiRoot extends Error {
  constructor() {
    super('apiRoot missing from migMeta');
    Object.setPrototypeOf(this, ClientFactoryMissingUserError.prototype);
  }
}

export class ClientFactoryMissingDiscoveryApi extends Error {
  constructor() {
    super('migMeta.discoveryApi is missing');
    Object.setPrototypeOf(this, ClientFactoryMissingDiscoveryApi.prototype);
  }
}

// TODO use individual args instead of mig-ui-coupled state structure
interface IMigState {
  auth: {
    user: { access_token: string; expiry_time: number };
    migMeta: { clusterApi: string; discoveryApi: string; namespace: string };
  };
  token: {
    tokenList: {
      MigToken: {
        spec: {
          migClusterRef: {
            name: string;
          };
        };
      };
      Secret: {
        data: {
          token: string;
        };
      };
    }[];
  };
}

let tokenExpiryHandler: TokenExpiryHandler | null = null;
export const ClientFactory = {
  cluster: (state: IMigState, customResponseType: ResponseType = 'json'): ClusterClient => {
    if (!state.auth.user) {
      throw new ClientFactoryMissingUserError();
    }
    if (!state.auth.migMeta.clusterApi) {
      throw new ClientFactoryMissingApiRoot();
    }

    const newClient = new ClusterClient(
      state.auth.migMeta.clusterApi,
      state.auth.user.access_token,
      customResponseType
    );

    if (tokenExpiryHandler) {
      newClient.setTokenExpiryHandler(
        (tokenExpiryHandler as unknown) as TokenExpiryHandler,
        state.auth.user.expiry_time
      );
    }

    return newClient;
  },
  discovery: (
    state: IMigState,
    clusterName?: string,
    customResponseType: ResponseType = 'json'
  ): DiscoveryClient => {
    if (!state.auth.user) {
      throw new ClientFactoryMissingUserError();
    }
    if (!state.auth.migMeta.discoveryApi) {
      // TODO make discovery API optional
      throw new ClientFactoryMissingDiscoveryApi();
    }

    let decodedToken: string | null = null;
    if (clusterName) {
      const matchingToken = state.token.tokenList.find(
        (token) => token.MigToken.spec.migClusterRef.name === clusterName
      );
      if (matchingToken) {
        const { token } = matchingToken.Secret.data;
        decodedToken = atob(token);
      }
    }
    const discoveryClient = new DiscoveryClient(
      state.auth.migMeta.discoveryApi,
      state.auth.migMeta.namespace,
      decodedToken ? decodedToken : state.auth.user.access_token,
      customResponseType
    );

    if (tokenExpiryHandler) {
      discoveryClient.setTokenExpiryHandler(
        (tokenExpiryHandler as unknown) as TokenExpiryHandler,
        state.auth.user.expiry_time
      );
    }
    return discoveryClient;
  },
};

export const setTokenExpiryHandler = (newExpiryHandler: TokenExpiryHandler): void => {
  tokenExpiryHandler = newExpiryHandler;
};

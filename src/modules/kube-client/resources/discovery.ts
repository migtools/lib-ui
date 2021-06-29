import { NamedDiscoveryResource, DiscoveryResource, IDiscoveryParameters } from './common';
import { IDiscoveryClient } from '../discoveryClient';

export enum ClusterKind {
  source = 'source',
  destination = 'destination',
  controller = 'controller',
}

export interface IPodContainer {
  name: string;
  log: string;
}

export interface IPodLogSource {
  name: string;
  namespace: string;
  containers: IPodContainer[];
}

export type IPlanLogSources = {
  [key in ClusterKind]: IPodLogSource[];
};

export interface IPlanReport extends IPlanLogSources {
  namespace: string;
  name: string;
}

export class NamespaceDiscovery extends DiscoveryResource {
  constructor(cluster: string, params: IDiscoveryParameters = {}) {
    super(cluster, 'namespaces', params);
  }

  public async get(client: IDiscoveryClient): Promise<string[]> {
    const ns = await client.get(this);
    return ns.data;
  }
}

export class PersistentVolumesDiscovery extends DiscoveryResource {
  constructor(cluster: string, params: IDiscoveryParameters = {}) {
    super(cluster, 'persistentvolumes', params);
  }

  public async get(client: IDiscoveryClient): Promise<any> {
    const pv = await client.get(this);
    return pv.data;
  }
}

export class PersistentVolumeDiscovery extends NamedDiscoveryResource {
  constructor(name: string, cluster: string, params: IDiscoveryParameters = {}) {
    super(name, cluster, 'persistentvolumes', params);
  }

  public async get(client: IDiscoveryClient): Promise<any[]> {
    const pvs = await client.get(this);
    return pvs.data;
  }
}

export class PlanPodReportDiscovery extends DiscoveryResource {
  constructor(planName: string, params: IDiscoveryParameters = {}) {
    super(planName, 'pods', params, 'plans');
  }

  public async get(client: IDiscoveryClient): Promise<IPlanReport> {
    const report = await client.get(this);
    return report.data;
  }
}

export interface IDebugTreeResource {
  discoveryAggregator(): string;
  discoveryType(): string;
  path(): string;
}

export class DebugTreeDiscoveryResource implements IDebugTreeResource {
  private readonly _aggregatorType: string;
  private readonly _aggregatorName: string;
  private readonly _aggregatorSpecifier: string;

  constructor(planName: string, migrationName: string, treeType = 'plans') {
    this._aggregatorType = treeType;
    this._aggregatorName = planName;
    this._aggregatorSpecifier = migrationName;
  }

  public discoveryType() {
    return 'tree';
  }

  public discoveryAggregator() {
    return [this._aggregatorType, this._aggregatorName].join('/');
  }

  public path(): string {
    return [this.discoveryAggregator(), this.discoveryType(), this._aggregatorSpecifier].join('/');
  }
}

import { MockClusterClient } from './client.mock';
import mocked_data from './kube_store/mocked_data';
import { TokenExpiryHandler } from './resources/common';

function determineHostClusterName() {
  return mocked_data['hostMigClusterName'];
}

export const ClientFactory = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  hostCluster: (state: object): MockClusterClient => {
    return new MockClusterClient(determineHostClusterName(), state);
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  forCluster: (clusterName: string, state: object): MockClusterClient => {
    return new MockClusterClient(clusterName, state);
  },
};

let tokenExpiryHandler: TokenExpiryHandler | null = null;

export const setTokenExpiryHandler = (newExpiryHandler: TokenExpiryHandler): void => {
  tokenExpiryHandler = newExpiryHandler;
};

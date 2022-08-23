import * as React from 'react';
import { Alert, AlertActionLink } from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

const navTo = (href: string) => window.top && (window.top.location.href = href);

const PackageMovedAlert: React.FunctionComponent = () => (
  <Alert
    variant="danger"
    title={<>IMPORTANT: This library has moved!</>}
    isInline
    className={spacing.mbLg}
    actionLinks={
      <>
        <AlertActionLink onClick={() => navTo('https://www.npmjs.com/package/@migtools/lib-ui')}>
          View new package on npm
        </AlertActionLink>
        <AlertActionLink onClick={() => navTo('https://github.com/migtools/lib-ui')}>
          View new package on GitHub
        </AlertActionLink>
        <AlertActionLink onClick={() => navTo('https://migtools.github.io/lib-ui/')}>
          View new documentation
        </AlertActionLink>
      </>
    }
  >
    The <code>@konveyor/lib-ui</code> package is deprecated and has been moved to{' '}
    <a href="https://www.npmjs.com/package/@migtools/lib-ui">
      <code>@migtools/lib-ui</code>
    </a>
    . You must switch to that package for future upgrades. The version documented here is the final
    release under the <code>@konveyor/lib-ui</code> name and is identical to the first release of{' '}
    <code>@migtools/lib-ui</code>.{' '}
  </Alert>
);

export default PackageMovedAlert;

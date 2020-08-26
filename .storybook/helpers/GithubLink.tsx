import * as React from 'react';
import { GithubIcon } from '@patternfly/react-icons';

interface IGithubLinkProps {
  path: string;
}

const GithubLink: React.FunctionComponent<IGithubLinkProps> = ({ path }) => (
  <a href={`https://github.com/konveyor/lib-ui/blob/master/${path}`}>
    <GithubIcon /> View Source on GitHub
  </a>
);

export default GithubLink;

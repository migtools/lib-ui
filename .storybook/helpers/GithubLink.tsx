import * as React from 'react';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';

interface IGithubLinkProps {
  path: string;
}

const GithubLink: React.FunctionComponent<IGithubLinkProps> = ({ path }) => (
  <a href={`https://github.com/migtools/lib-ui/blob/main/${path}`}>
    <GithubIcon /> View Source on GitHub
  </a>
);

export default GithubLink;

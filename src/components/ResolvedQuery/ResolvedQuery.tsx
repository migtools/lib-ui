import * as React from 'react';
import { UnknownResult } from '../../common/types';
import { ResolvedQueries, IResolvedQueriesProps } from './ResolvedQueries';

export interface IResolvedQueryProps extends Omit<IResolvedQueriesProps, 'resultsWithErrorTitles'> {
  result: UnknownResult;
  errorTitle: string;
}

export const ResolvedQuery: React.FunctionComponent<IResolvedQueryProps> = ({
  result,
  errorTitle,
  ...props
}: IResolvedQueryProps) => (
  <ResolvedQueries {...props} resultsWithErrorTitles={[{ result, errorTitle }]} />
);

import * as React from 'react';
import { UnknownResult } from '../../common/types';
import { ResolvedQueries, IResolvedQueriesProps } from './ResolvedQueries';

export interface IResolvedQueryProps
  extends Omit<IResolvedQueriesProps, 'results' | 'errorTitles'> {
  result: UnknownResult;
  errorTitle: string;
}

export const ResolvedQuery: React.FunctionComponent<IResolvedQueryProps> = ({
  result,
  errorTitle,
  ...props
}: IResolvedQueryProps) => <ResolvedQueries {...props} resultsMap={[{ result, errorTitle }]} />;

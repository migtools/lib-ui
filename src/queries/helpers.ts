import { QueryStatus } from '@tanstack/react-query';
import { UnknownResult } from '../common/types';

export const getAggregateQueryStatus = (queryResults: UnknownResult[]): QueryStatus => {
  if (queryResults.some((result) => result.isError)) return 'error';
  if (queryResults.some((result) => result.isLoading)) return 'loading';
  return 'success';
};

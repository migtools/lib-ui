import { QueryStatus } from 'react-query';
import { UnknownResult } from '../common/types';

export const getAggregateQueryStatus = (queryResults: UnknownResult[]): QueryStatus => {
  if (queryResults.some((result) => result.isError)) return 'error';
  if (queryResults.some((result) => result.isLoading)) return 'loading';
  if (queryResults.every((result) => result.isIdle)) return 'idle';
  return 'success';
};

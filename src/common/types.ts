import { UseMutationResult, UseQueryResult } from 'react-query';

export type UnknownResult = Pick<
  UseQueryResult<unknown>,
  'isError' | 'isLoading' | 'isIdle' | 'error'
>;

export type UnknownMutationResult = Pick<
  UseMutationResult<unknown>,
  'isError' | 'isLoading' | 'isIdle' | 'error' | 'reset'
>;

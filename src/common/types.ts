import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';

export type UnknownResult = Pick<UseQueryResult<unknown>, 'isError' | 'isLoading' | 'error'>;

export type UnknownMutationResult = Pick<
  UseMutationResult<unknown>,
  'isError' | 'isLoading' | 'isIdle' | 'error' | 'reset'
>;

export type ResultsWithErrorTitles = { result: UnknownResult; errorTitle: string };

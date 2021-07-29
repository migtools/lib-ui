import * as React from 'react';
import { ISortBy, SortByDirection } from '@patternfly/react-table';

interface IBaseTableSortStateParams<T> {
  items: T[];
  initialSortColumnIndex?: number | null;
  initialSortDirection?: 'asc' | 'desc';
}

interface ITableSortStateParamsByValue<T> extends IBaseTableSortStateParams<T> {
  getSortValues: (item: T) => (string | number | boolean)[];
  compareFn?: never;
}

interface ITableSortStateParamsByFunction<T> extends IBaseTableSortStateParams<T> {
  getSortValues?: never;
  compareFn: (itemA: T, itemB: T, sortColumnIndex: number, sortDirection: 'asc' | 'desc') => number;
}

export type TableSortStateParams<T> =
  | ITableSortStateParamsByValue<T>
  | ITableSortStateParamsByFunction<T>;

export interface ISortStateHook<T> {
  sortedItems: T[];
  sortColumnIndex: number | null;
  setSortColumnIndex: React.Dispatch<React.SetStateAction<number | null>>;
  sortDirection: 'asc' | 'desc';
  setSortDirection: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  reset: () => void;
  tableSortProps: {
    sortBy: ISortBy;
    onSort: (event: React.SyntheticEvent, index: number, direction: SortByDirection) => void;
  };
}

export const useTableSortState = <T>(params: TableSortStateParams<T>): ISortStateHook<T> => {
  const { items, initialSortColumnIndex = null, initialSortDirection = 'asc' } = params;
  const [sortColumnIndex, setSortColumnIndex] = React.useState<number | null>(
    initialSortColumnIndex
  );
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>(initialSortDirection);

  let sortedItems = items;
  if (sortColumnIndex !== null) {
    let sortFn: (itemA: T, itemB: T) => number;
    if (params.compareFn) {
      sortFn = (a: T, b: T) => params.compareFn(a, b, sortColumnIndex, sortDirection);
    } else {
      sortFn = (a: T, b: T) => {
        const aValue = params.getSortValues(a)[sortColumnIndex || 0];
        const bValue = params.getSortValues(b)[sortColumnIndex || 0];
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      };
    }
    sortedItems = [...items].sort(sortFn);
  }

  return {
    sortedItems,
    sortColumnIndex,
    setSortColumnIndex,
    sortDirection,
    setSortDirection,
    reset: () => {
      setSortColumnIndex(initialSortColumnIndex);
      setSortDirection(initialSortDirection);
    },
    tableSortProps: {
      sortBy: {
        index: sortColumnIndex !== null ? sortColumnIndex : undefined,
        direction: sortDirection,
      },
      onSort: (_event, index, direction) => {
        setSortColumnIndex(index);
        setSortDirection(direction);
      },
    },
  };
};

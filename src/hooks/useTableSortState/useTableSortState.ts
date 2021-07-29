import * as React from 'react';
import { ISortBy, SortByDirection } from '@patternfly/react-table';

const simpleCompareFn = (
  aValue: string | number | boolean,
  bValue: string | number | boolean,
  sortDirection: 'asc' | 'desc'
) => {
  if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
  if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
  return 0;
};

// Argument types:

interface IBaseTableSortStateArgs<T> {
  items: T[];
  initialSortDirection?: 'asc' | 'desc';
  onSortChange?: () => void;
}

interface ITableSortStateArgsByValueWithColumnIndexes<T> extends IBaseTableSortStateArgs<T> {
  columnKeys?: never;
  initialSortColumnIndex?: number | null;
  getSortValues: (item: T) => (string | number | boolean)[];
  compareFn?: never;
}

interface ITableSortStateArgsByValueWithColumnKeys<T, ColumnKey extends string = string>
  extends IBaseTableSortStateArgs<T> {
  columnKeys: ColumnKey[];
  initialSortColumnKey?: ColumnKey | null;
  getSortValues: (item: T) => Record<ColumnKey, string | number | boolean>;
  compareFn?: never;
}

interface ITableSortStateArgsByFunctionWithColumnIndexes<T> extends IBaseTableSortStateArgs<T> {
  columnKeys?: never;
  initialSortColumnIndex?: number | null;
  getSortValues?: never;
  compareFn: (itemA: T, itemB: T, sortColumnIndex: number, sortDirection: 'asc' | 'desc') => number;
}

interface ITableSortStateArgsByFunctionWithColumnKeys<T, ColumnKey extends string = string>
  extends IBaseTableSortStateArgs<T> {
  columnKeys: ColumnKey[];
  initialSortColumnKey?: ColumnKey | null;
  getSortValues?: never;
  compareFn: (
    itemA: T,
    itemB: T,
    sortColumnKey: ColumnKey,
    sortDirection: 'asc' | 'desc'
  ) => number;
}

type TableSortStateArgsWithColumnIndexes<T> =
  | ITableSortStateArgsByValueWithColumnIndexes<T>
  | ITableSortStateArgsByFunctionWithColumnIndexes<T>;

type TableSortStateArgsWithColumnKeys<T, ColumnKey extends string = string> =
  | ITableSortStateArgsByValueWithColumnKeys<T, ColumnKey>
  | ITableSortStateArgsByFunctionWithColumnKeys<T, ColumnKey>;

export type TableSortStateArgs<T, ColumnKey extends string = string> =
  | TableSortStateArgsWithColumnIndexes<T>
  | TableSortStateArgsWithColumnKeys<T, ColumnKey>;

// Return value types:
interface IBaseTableSortStateHook<T> {
  sortedItems: T[];
  sortDirection: 'asc' | 'desc';
  setSortDirection: (newDirection: 'asc' | 'desc') => void;
  reset: () => void;
  tableSortProps: {
    sortBy: ISortBy;
    onSort: (event: React.SyntheticEvent, index: number, direction: SortByDirection) => void;
  };
}

interface ITableSortStateHookWithColumnIndexes<T> extends IBaseTableSortStateHook<T> {
  sortColumnIndex: number | null;
  setSortColumnIndex: (newIndex: number | null) => void;
}

interface ITableSortStateHookWithColumnKeys<T, ColumnKey extends string = string>
  extends IBaseTableSortStateHook<T> {
  sortColumnKey: ColumnKey | null;
  setSortColumnKey: (newKey: ColumnKey | null) => void;
}

type TableSortStateHook<T, ColumnKey extends string = string> =
  | ITableSortStateHookWithColumnIndexes<T>
  | ITableSortStateHookWithColumnKeys<T, ColumnKey>;

export const useTableSortState = <T, ColumnKey extends string = string>(
  args: TableSortStateArgs<T, ColumnKey>
): TableSortStateHook<T, ColumnKey> => {
  const { items, initialSortDirection = 'asc', onSortChange } = args;
  const { initialSortColumnIndex = null } = args as TableSortStateArgsWithColumnIndexes<T>;
  const { initialSortColumnKey = null } = args as TableSortStateArgsWithColumnKeys<T, ColumnKey>;
  const getSortChangeCallback = <T>(fn: (newVal: T) => void) => (newVal: T) => {
    fn(newVal);
    if (onSortChange) onSortChange();
  };
  const sortColumnIndexState = React.useState<number | null>(initialSortColumnIndex);
  const sortColumnIndex = sortColumnIndexState[0];
  const setSortColumnIndex = getSortChangeCallback(sortColumnIndexState[1]);

  const sortColumnKeyState = React.useState<ColumnKey | null>(initialSortColumnKey);
  const sortColumnKey = sortColumnKeyState[0];
  const setSortColumnKey = getSortChangeCallback(sortColumnKeyState[1]);

  const sortDirectionState = React.useState<'asc' | 'desc'>(initialSortDirection);
  const sortDirection = sortDirectionState[0];
  const setSortDirection = getSortChangeCallback(sortDirectionState[1]);

  let sortedItems = items;
  let sortFn: ((itemA: T, itemB: T) => number) | null = null;
  if (!args.columnKeys && sortColumnIndex !== null) {
    if (args.compareFn) {
      sortFn = (a: T, b: T) => args.compareFn(a, b, sortColumnIndex, sortDirection);
    } else {
      sortFn = (a: T, b: T) => {
        const aValue = args.getSortValues(a)[sortColumnIndex];
        const bValue = args.getSortValues(b)[sortColumnIndex];
        return simpleCompareFn(aValue, bValue, sortDirection);
      };
    }
  } else if (args.columnKeys && sortColumnKey !== null) {
    if (args.compareFn) {
      sortFn = (a: T, b: T) => args.compareFn(a, b, sortColumnKey, sortDirection);
    } else {
      sortFn = (a: T, b: T) => {
        const aValue = args.getSortValues(a)[sortColumnKey];
        const bValue = args.getSortValues(b)[sortColumnKey];
        return simpleCompareFn(aValue, bValue, sortDirection);
      };
    }
  }
  if (sortFn) sortedItems = [...items].sort(sortFn);

  const baseReturnVal: IBaseTableSortStateHook<T> = {
    sortedItems,
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

  if (!args.columnKeys) {
    return {
      ...baseReturnVal,
      sortColumnIndex,
      setSortColumnIndex,
    };
  } else {
    return {
      ...baseReturnVal,
      sortColumnKey,
      setSortColumnKey,
    };
  }
};

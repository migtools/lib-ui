import * as React from 'react';
import { ISortBy, SortByDirection } from '@patternfly/react-table';

interface IBaseTableSortStateArgs<T, ColumnIndex extends number | string> {
  items: T[];
  initialSortColumnIndex?: ColumnIndex | null;
  initialSortDirection?: 'asc' | 'desc';
  columnIds?: ColumnIndex[];
  onSortChange?: () => void;
}

interface ITableSortStateArgsByValue<T, ColumnIndex extends number | string>
  extends IBaseTableSortStateArgs<T, ColumnIndex> {
  getSortValues: (item: T) => Record<ColumnIndex, string | number | boolean>;
  compareFn?: never;
}

interface ITableSortStateArgsByFunction<T, ColumnIndex extends number | string>
  extends IBaseTableSortStateArgs<T, ColumnIndex> {
  getSortValues?: never;
  compareFn: (
    itemA: T,
    itemB: T,
    sortColumnIndex: ColumnIndex,
    sortDirection: 'asc' | 'desc'
  ) => number;
}

export type TableSortStateArgs<T, ColumnIndex extends number | string = number> =
  | ITableSortStateArgsByValue<T, ColumnIndex>
  | ITableSortStateArgsByFunction<T, ColumnIndex>;

export interface ITableSortStateHook<T, ColumnIndex extends number | string> {
  sortedItems: T[];
  sortColumnIndex: ColumnIndex | null;
  setSortColumnIndex: (newIndex: ColumnIndex | null) => void;
  sortDirection: 'asc' | 'desc';
  setSortDirection: (newDirection: 'asc' | 'desc') => void;
  reset: () => void;
  tableSortProps: {
    sortBy: ISortBy;
    onSort: (event: React.SyntheticEvent, index: number, direction: SortByDirection) => void;
  };
}

export const useTableSortState = <T, ColumnIndex extends number | string = number>(
  args: TableSortStateArgs<T, ColumnIndex>
): ITableSortStateHook<T, ColumnIndex> => {
  const { items, initialSortColumnIndex = null, initialSortDirection = 'asc', onSortChange } = args;
  const [sortColumnIndex, baseSetSortColumnIndex] = React.useState<ColumnIndex | null>(
    initialSortColumnIndex
  );
  const [sortDirection, baseSetSortDirection] = React.useState<'asc' | 'desc'>(
    initialSortDirection
  );
  const setSortColumnIndex = (newIndex: ColumnIndex | null) => {
    baseSetSortColumnIndex(newIndex);
    if (onSortChange) onSortChange();
  };
  const setSortDirection = (newDirection: 'asc' | 'desc') => {
    baseSetSortDirection(newDirection);
    if (onSortChange) onSortChange();
  };

  let sortedItems = items;
  if (sortColumnIndex !== null) {
    let sortFn: (itemA: T, itemB: T) => number;
    if (args.compareFn) {
      sortFn = (a: T, b: T) => args.compareFn(a, b, sortColumnIndex, sortDirection);
    } else {
      sortFn = (a: T, b: T) => {
        const aValue = args.getSortValues(a)[sortColumnIndex];
        const bValue = args.getSortValues(b)[sortColumnIndex];
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

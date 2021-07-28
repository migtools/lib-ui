import {
  ICell,
  sortable,
  SortByDirection,
  Table,
  TableBody,
  TableComposable,
  TableHeader,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@patternfly/react-table';
import * as React from 'react';
import { useTableSortState } from './useTableSortState';

// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a feugiat urna. Duis tincidunt consequat sem, eget efficitur erat luctus in.';
// TODO cleanup so we have distinct activeSortIndex and activeSortDirection and we don't have to use weird onSort shit (maybe have a tableSortProps: { sortBy, onSort }?)
// TODO add support for a custom sort function (w/ example). we don't need getSortValues in that case, so how do we pass the params?
// TODO add an example with sorting and pagination together? can we put it somewhere common and show it in both stories?

export const CustomSorting: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data
  type Word = { text: string; index: number };
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = text.split(' ').map((text, index) => ({ text, index }));

  // Given an item, return an array of values used for sort comparisons in each column.
  const getSortValues = (word: Word) => [word.index, word.text];
  const { sortBy, onSort, sortedItems } = useTableSortState(words, getSortValues);

  return (
    <>
      <label htmlFor="sortColumn">Sort by: </label>
      <select
        name="sortColumn"
        id="sortColumn"
        onChange={(event) =>
          onSort(
            event,
            (event.target.value !== 'none' ? parseInt(event.target.value) : undefined) as number,
            SortByDirection[sortBy.direction || 'asc']
          )
        }
        value={sortBy.index}
      >
        <option value="none">None</option>
        <option value="0">Index in sentence</option>
        <option value="1">Word</option>
      </select>
      <br />
      <label htmlFor="sortDirection">Sort direction: </label>
      <select
        name="sortDirection"
        id="sortDirection"
        onChange={(event) => onSort(event, sortBy.index || 0, SortByDirection[event.target.value])}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <br />
      <ul>
        {sortedItems.map((word) => (
          <li key={word.index}>
            {word.index}: {word.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export const ComposableTableSorting: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data
  type Word = { text: string; index: number };
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = text.split(' ').map((text, index) => ({ text, index }));

  // Given an item, return an array of values used for sort comparisons in each column.
  const getSortValues = (word: Word) => [word.index, word.text];
  const { sortBy, onSort, sortedItems } = useTableSortState(words, getSortValues);

  return (
    <TableComposable aria-label="Composable table sorting example" variant="compact">
      <Thead>
        <Tr>
          <Th sort={{ sortBy, onSort, columnIndex: 0 }}>Index in sentence</Th>
          <Th sort={{ sortBy, onSort, columnIndex: 1 }}>Word</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedItems.map((word) => (
          <Tr key={word.index}>
            <Td dataLabel="Index in sentence">{word.index}</Td>
            <Td dataLabel="Word">{word.text}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );

  return null;
};

export const LegacyTableSorting: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data
  type Word = { text: string; index: number };
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = text.split(' ').map((text, index) => ({ text, index }));

  // Given an item, return an array of values used for sort comparisons in each column.
  const getSortValues = (word: Word) => [word.index, word.text];
  const { sortBy, onSort, sortedItems } = useTableSortState(words, getSortValues);

  const columns: ICell[] = [
    { title: 'Index in Sentence', transforms: [sortable] },
    { title: 'Word', transforms: [sortable] },
  ];
  const rows = sortedItems.map((word) => [word.index, word.text]);

  return (
    <Table
      aria-label="Legacy table sorting example"
      variant="compact"
      cells={columns}
      rows={rows}
      sortBy={sortBy}
      onSort={onSort}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};

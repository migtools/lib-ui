import {
  sortable,
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

// TODO do we need to have sort columns mapped by keys instead of column indexes? How to support moving columns around in the future?
//    - columnKeys can be an array of strings, and if passed, getSortValues and compareFn get a sortColumnKey instead of a sortColumnIndex?

export const StandaloneByValue: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data.
  type Word = { text: string; index: number };
  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = sentence.split(' ').map((text, index) => ({ text, index }));

  // Given an item, getSortValues return an array of values used for sort comparisons in each column.
  const getSortValues = (word: Word) => [word.index, word.text.toLowerCase()];
  const sortState = useTableSortState({
    items: words,
    getSortValues, // TODO it can tell this should return an object if we have columnIds, but it can't tell it should be an array if not.
  });

  return (
    <>
      <label htmlFor="sortColumn">Sort by: </label>
      <select
        name="sortColumn"
        id="sortColumn"
        onChange={(event) => {
          sortState.setSortColumnIndex(
            event.target.value !== 'none' ? parseInt(event.target.value) : null
          );
        }}
        value={sortState.sortColumnIndex === null ? 'none' : sortState.sortColumnIndex}
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
        onChange={(event) => {
          sortState.setSortDirection(event.target.value as 'asc' | 'desc');
        }}
        value={sortState.sortDirection}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <br />
      <ul>
        {sortState.sortedItems.map((word) => (
          <li key={word.index}>
            {word.index}: {word.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export const StandaloneByValueWithIds: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data.
  type Word = { text: string; index: number };
  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = sentence.split(' ').map((text, index) => ({ text, index }));

  // Given an item, getSortValues return an array of values used for sort comparisons in each column.
  const getSortValues = (word: Word) => ({ index: word.index, text: word.text.toLowerCase() });
  const sortState = useTableSortState({
    items: words,
    getSortValues,
    columnIds: ['index', 'text'],
  });

  return (
    <>
      <label htmlFor="sortColumn">Sort by: </label>
      <select
        name="sortColumn"
        id="sortColumn"
        onChange={(event) => {
          sortState.setSortColumnIndex(
            event.target.value !== 'none' ? parseInt(event.target.value) : null
          );
        }}
        value={sortState.sortColumnIndex === null ? 'none' : sortState.sortColumnIndex}
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
        onChange={(event) => {
          sortState.setSortDirection(event.target.value as 'asc' | 'desc');
        }}
        value={sortState.sortDirection}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <br />
      <ul>
        {sortState.sortedItems.map((word) => (
          <li key={word.index}>
            {word.index}: {word.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export const StandaloneByFunction: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data.
  type Word = { text: string; index: number };
  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = sentence.split(' ').map((text, index) => ({ text, index }));

  // compareFn can be passed instead of getSortValues to customize the sorting logic.
  const sortState = useTableSortState({
    items: words,
    compareFn: (a, b, sortColumnIndex, sortDirection) => {
      if (a.index === 0) return -1;
      if (b.index === 0) return 1;
      const aValue = [a.index, a.text][sortColumnIndex];
      const bValue = [b.index, b.text][sortColumnIndex];
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    },
  });

  return (
    <>
      <p>
        The compareFn here always puts the word &quot;Lorem&quot; at the top regardless of the
        selections.
      </p>
      <br />
      <label htmlFor="sortColumn">Sort by: </label>
      <select
        name="sortColumn"
        id="sortColumn"
        onChange={(event) => {
          sortState.setSortColumnIndex(
            event.target.value !== 'none' ? parseInt(event.target.value) : null
          );
        }}
        value={sortState.sortColumnIndex === null ? 'none' : sortState.sortColumnIndex}
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
        onChange={(event) => {
          sortState.setSortDirection(event.target.value as 'asc' | 'desc');
        }}
        value={sortState.sortDirection}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <br />
      <ul>
        {sortState.sortedItems.map((word) => (
          <li key={word.index}>
            {word.index}: {word.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export const ComposableTableSorting: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data.
  type Word = { text: string; index: number };
  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = sentence.split(' ').map((text, index) => ({ text, index }));

  // Given an item, getSortValues returns an array of values used for sort comparisons in each column.
  const getSortValues = (word: Word) => [word.index, word.text.toLowerCase()];
  const { sortedItems, tableSortProps } = useTableSortState({ items: words, getSortValues });

  return (
    <TableComposable aria-label="Composable table sorting example" variant="compact">
      <Thead>
        <Tr>
          <Th sort={{ ...tableSortProps, columnIndex: 0 }}>Index in sentence</Th>
          <Th sort={{ ...tableSortProps, columnIndex: 1 }}>Word</Th>
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
  // In real usage, these items would come from e.g. API data.
  type Word = { text: string; index: number };
  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const words: Word[] = sentence.split(' ').map((text, index) => ({ text, index }));

  // Given an item, getSortValues returns an array of values used for sort comparisons in each column.
  const getSortValues = (word: Word) => [word.index, word.text.toLowerCase()];
  const { sortedItems, tableSortProps } = useTableSortState({ items: words, getSortValues });

  return (
    <Table
      aria-label="Legacy table sorting example"
      variant="compact"
      cells={[
        { title: 'Index in Sentence', transforms: [sortable] },
        { title: 'Word', transforms: [sortable] },
      ]}
      rows={sortedItems.map((word) => [word.index, word.text])}
      {...tableSortProps}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};

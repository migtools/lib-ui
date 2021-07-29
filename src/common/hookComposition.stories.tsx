import * as React from 'react';
import { useTableSortState } from '../hooks/useTableSortState';
import { usePaginationState } from '../hooks/usePaginationState';
import { Pagination } from '@patternfly/react-core';
import { TableComposable, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';

export const ComposedSortingAndPagination: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data.
  type Word = { text: string; index: number };
  const sentence =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a feugiat urna. Duis tincidunt consequat sem, eget efficitur erat luctus in.';
  const words: Word[] = sentence.split(' ').map((text, index) => ({ text, index }));

  const getSortValues = (word: Word) => [word.index, word.text.toLowerCase()];
  const { sortedItems, tableSortProps } = useTableSortState({
    items: words,
    getSortValues,
    onSortChange: () => {
      setPageNumber(1);
    },
  });
  const { currentPageItems, paginationProps, setPageNumber } = usePaginationState(sortedItems, 10);

  return (
    <>
      <Pagination widgetId="composed-hooks-pagination" {...paginationProps} variant="top" />
      <TableComposable aria-label="Composable table sorting example" variant="compact">
        <Thead>
          <Tr>
            <Th sort={{ ...tableSortProps, columnIndex: 0 }}>Index in sentence</Th>
            <Th sort={{ ...tableSortProps, columnIndex: 1 }}>Word</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentPageItems.map((word) => (
            <Tr key={word.index}>
              <Td dataLabel="Index in sentence">{word.index}</Td>
              <Td dataLabel="Word">{word.text}</Td>
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
      <Pagination widgetId="composed-hooks-pagination" {...paginationProps} variant="bottom" />
    </>
  );
};

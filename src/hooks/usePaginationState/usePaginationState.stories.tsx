import * as React from 'react';
import { Pagination } from '@patternfly/react-core';
import { usePaginationState } from './usePaginationState';

export const BasicPagination: React.FunctionComponent = () => {
  // In real usage, these items would come from e.g. API data
  const items = Array.from(new Array(100).keys()).map((_, index) => ({
    name: `Item ${index + 1}`,
  }));

  const { currentPageItems, setPageNumber, paginationProps } = usePaginationState(items, 10);

  return (
    <>
      <Pagination widgetId="basic-pagination" {...paginationProps} />
      <ul>
        {currentPageItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <br />
      <button onClick={() => setPageNumber(1)}>Go to first page</button>
    </>
  );
};

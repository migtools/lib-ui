import * as React from 'react';
import { Checkbox } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, ICell, IRow } from '@patternfly/react-table';
import { useSelectionState } from './useSelectionState';

export const Checkboxes: React.FunctionComponent = () => {
  interface IFruit {
    name: string;
  }

  const fruits: IFruit[] = [{ name: 'Apple' }, { name: 'Orange' }, { name: 'Banana' }];

  const { selectedItems, isItemSelected, toggleItemSelected, areAllSelected, selectAll } =
    useSelectionState<IFruit>({
      items: fruits,
      isEqual: (a, b) => a.name === b.name,
    });

  return (
    <div>
      <Checkbox
        id="example-1-select-all"
        label="Select all"
        isChecked={areAllSelected}
        onChange={(checked) => selectAll(checked)}
      />
      <br />
      {fruits.map((fruit) => (
        <Checkbox
          key={fruit.name}
          id={`example-1-${fruit.name}-checkbox`}
          label={fruit.name}
          isChecked={isItemSelected(fruit)}
          onChange={() => toggleItemSelected(fruit)}
        />
      ))}
      {selectedItems.length > 0 ? (
        <>
          <br />
          <p>Do something with these! {selectedItems.map((fruit) => fruit.name).join(', ')}</p>
        </>
      ) : null}
    </div>
  );
};

export const ExpandableTable: React.FunctionComponent = () => {
  interface IFruit {
    name: string;
    price: string;
    description: string;
  }

  const fruits: IFruit[] = [
    { name: 'Apple', price: '$0.83', description: 'Red delicious!' },
    { name: 'Orange', price: '$0.74', description: 'Fresh and juicy!' },
    { name: 'Banana', price: '$0.45', description: 'On sale this week!' },
  ];

  const { isItemSelected: isItemExpanded, toggleItemSelected: toggleItemExpanded } =
    useSelectionState<IFruit>({
      items: fruits,
      isEqual: (a, b) => a.name === b.name,
    });

  const columns: ICell[] = [{ title: 'Name' }, { title: 'Price' }];
  const rows: IRow[] = [];
  fruits.forEach((fruit) => {
    const isExpanded = isItemExpanded(fruit);
    rows.push({
      meta: { fruit },
      isOpen: isExpanded,
      cells: [fruit.name, fruit.price],
    });
    if (isExpanded) {
      rows.push({
        parent: rows.length - 1,
        fullWidth: true,
        cells: [fruit.description],
      });
    }
  });

  return (
    <Table
      variant="compact"
      aria-label="Fruits table"
      onCollapse={(_event, _rowIndex, _isOpen, rowData) => toggleItemExpanded(rowData.meta.fruit)}
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};

export const ExternalState: React.FunctionComponent = () => {
  interface IFruit {
    name: string;
  }

  const [selectedFruits, setSelectedFruits] = React.useState<IFruit[]>([]);

  const fruits: IFruit[] = [{ name: 'Apple' }, { name: 'Orange' }, { name: 'Banana' }];

  const { selectedItems, isItemSelected, toggleItemSelected, areAllSelected, selectAll } =
    useSelectionState<IFruit>({
      items: fruits,
      isEqual: (a, b) => a.name === b.name,
      externalState: [selectedFruits, setSelectedFruits],
    });

  return (
    <div>
      <Checkbox
        id="example-3-select-all"
        label="Select all"
        isChecked={areAllSelected}
        onChange={(checked) => selectAll(checked)}
      />
      <br />
      {fruits.map((fruit) => (
        <Checkbox
          key={fruit.name}
          id={`example-3-${fruit.name}-checkbox`}
          label={fruit.name}
          isChecked={isItemSelected(fruit)}
          onChange={() => toggleItemSelected(fruit)}
        />
      ))}
      {selectedItems.length > 0 ? (
        <>
          <br />
          <p>Do something with these! {selectedItems.map((fruit) => fruit.name).join(', ')}</p>
        </>
      ) : null}
    </div>
  );
};

export const NonSelectableItems: React.FunctionComponent = () => {
  interface IFruit {
    name: string;
    isRound: boolean;
  }

  const fruits: IFruit[] = [
    { name: 'Apple', isRound: true },
    { name: 'Orange', isRound: true },
    { name: 'Banana', isRound: false },
  ];

  const [nonRoundFruitsAllowed, setNonRoundFruitsAllowed] = React.useState(true);

  const {
    selectedItems,
    isItemSelected,
    isItemSelectable,
    toggleItemSelected,
    areAllSelected,
    selectAll,
  } = useSelectionState<IFruit>({
    items: fruits,
    isEqual: (a, b) => a.name === b.name,
    isItemSelectable: (item) => item.isRound || nonRoundFruitsAllowed,
  });

  return (
    <div>
      <Checkbox
        id="allow-non-round"
        label="Allow non-round fruits"
        isChecked={nonRoundFruitsAllowed}
        onChange={setNonRoundFruitsAllowed}
      />
      <br />
      <hr />
      <br />
      <Checkbox
        id="example-4-select-all"
        label="Select all"
        isChecked={areAllSelected}
        onChange={(checked) => selectAll(checked)}
      />
      <br />
      {fruits.map((fruit) => (
        <Checkbox
          key={fruit.name}
          id={`example-4-${fruit.name}-checkbox`}
          label={fruit.name}
          isChecked={isItemSelected(fruit)}
          onChange={() => toggleItemSelected(fruit)}
          isDisabled={!isItemSelectable(fruit)}
        />
      ))}
      {selectedItems.length > 0 ? (
        <>
          <br />
          <p>Do something with these! {selectedItems.map((fruit) => fruit.name).join(', ')}</p>
        </>
      ) : null}
    </div>
  );
};

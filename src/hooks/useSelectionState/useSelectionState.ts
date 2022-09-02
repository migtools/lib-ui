import * as React from 'react';

export interface ISelectionStateArgs<T> {
  items: T[];
  initialSelected?: T[];
  isEqual?: (a: T, b: T) => boolean;
  isItemSelectable?: (item: T) => boolean;
  externalState?: [T[], React.Dispatch<React.SetStateAction<T[]>>];
}

export interface ISelectionState<T> {
  selectedItems: T[];
  isItemSelected: (item: T) => boolean;
  isItemSelectable: (item: T) => boolean;
  toggleItemSelected: (item: T, isSelecting?: boolean) => void;
  selectMultiple: (items: T[], isSelecting: boolean) => void;
  areAllSelected: boolean;
  selectAll: (isSelecting?: boolean) => void;
  setSelectedItems: (items: T[]) => void;
}

export const useSelectionState = <T>({
  items,
  initialSelected = [],
  isEqual = (a, b) => a === b,
  isItemSelectable = () => true,
  externalState,
}: ISelectionStateArgs<T>): ISelectionState<T> => {
  const internalState = React.useState<T[]>(initialSelected);
  const [selectedItems, setSelectedItems] = externalState || internalState;

  const isItemSelected = (item: T) => selectedItems.some((i) => isEqual(item, i));

  const toggleItemSelected = (item: T, isSelecting = !isItemSelected(item)) => {
    if (isSelecting && isItemSelectable(item)) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => !isEqual(i, item)));
    }
  };

  const selectMultiple = (itemsSubset: T[], isSelecting: boolean) => {
    const otherSelectedItems = selectedItems.filter(
      (selected) => !itemsSubset.some((item) => isEqual(selected, item))
    );
    const itemsToSelect = itemsSubset.filter(isItemSelectable);
    if (isSelecting) {
      setSelectedItems([...otherSelectedItems, ...itemsToSelect]);
    } else {
      setSelectedItems(otherSelectedItems);
    }
  };

  const selectableItems = items.filter(isItemSelectable);
  const selectAll = (isSelecting = true) => setSelectedItems(isSelecting ? selectableItems : []);
  const areAllSelected = selectedItems.length === selectableItems.length;

  // Preserve original order of items
  let selectedItemsInOrder: T[] = [];
  if (areAllSelected) {
    selectedItemsInOrder = selectableItems;
  } else if (selectedItems.length > 0) {
    selectedItemsInOrder = selectableItems.filter(isItemSelected);
  }

  return {
    selectedItems: selectedItemsInOrder,
    isItemSelected,
    isItemSelectable,
    toggleItemSelected,
    selectMultiple,
    areAllSelected,
    selectAll,
    setSelectedItems,
  };
};

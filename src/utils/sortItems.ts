import type { StoreItemProps } from '../types/global.types';

export const sortItems = (items: StoreItemProps[], sortOption: string): StoreItemProps[] => {
  const sortedItems = [...items];
  switch (sortOption) {
    case 'a-z':
      return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    case 'z-a':
      return sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    case 'low-high':
      return sortedItems.sort((a, b) => parseFloat(a.actualPrice) - parseFloat(b.actualPrice));
    case 'high-low':
      return sortedItems.sort((a, b) => parseFloat(b.actualPrice) - parseFloat(a.actualPrice));
    default:
      return sortedItems;
  }
};

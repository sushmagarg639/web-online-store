import React, { useState, useMemo } from 'react';
import StoreItem from '../../components/StoreItem';
import type { StoreItemProps } from '../../types/global.types';
import styles from './StorePage.module.scss';
import type { SortOption } from './StorePage.types';
import { useDebounce } from '../../hooks/useDebounce';
import { sortItems } from '../../utils/sortItems';

export default function StorePage({ items }: { items: StoreItemProps[] }) {
  const [filterText, setFilterText] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('recommended');

  const debouncedFilter = useDebounce(filterText, 500);

  const filteredItems = useMemo(() => {
    const filtered = debouncedFilter.trim()
      ? items.filter((item) => item.name.toLowerCase().includes(debouncedFilter.toLowerCase()))
      : items;

    return sortItems(filtered, sortOption);
  }, [debouncedFilter, sortOption, items]);

  return (
    <div className={`container ${styles.wrapper}`}>
      <h1>HeartStore Item Deals</h1>
      <div className={styles.filters}>
        <div className={styles['filters__filter-wrapper']}>
          <label htmlFor="filter">Filter by:</label>
          <input
            id="filter"
            name="filter"
            type="text"
            placeholder="Search items"
            value={filterText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
          ></input>
        </div>
        <div className={styles['filters__sort-wrapper']}>
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="recommended">Recommended</option>
            <option value="a-z">Alphabetical: A-Z</option>
            <option value="z-a">Alphabetical: Z-A</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className={styles.items}>
        {filteredItems.length === 0 ? (
          <h2>No items found.</h2>
        ) : (
          filteredItems.map((item) => <StoreItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}

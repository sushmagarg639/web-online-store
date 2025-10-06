import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { PageManager } from './pages/PageManager';
import type { StoreItemProps, OrderDetailsProps } from './types/global.types';
import { StorePurchaseContext } from './context/StorePurchaseContext';

function App() {
  const [page, setPage] = useState<'store' | 'checkout' | 'confirmation'>('store');
  const [selectedItem, setSelectedItem] = useState<StoreItemProps | null>(null);
  const [orderDetails, setOrderDetails] = useState<OrderDetailsProps | null>(null);

  const handleBuy = (item: StoreItemProps) => {
    setSelectedItem(item);
    setPage('checkout');
  };

  const handleFormSubmit = (details: OrderDetailsProps) => {
    setOrderDetails(details);
    setPage('confirmation');
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="main-content">
        <StorePurchaseContext.Provider
          value={{
            page,
            onBuy: handleBuy,
            onSubmit: handleFormSubmit,
            selectedItem,
            setSelectedItem,
            orderDetails,
            setOrderDetails,
          }}
        >
          <PageManager page={page} />
        </StorePurchaseContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

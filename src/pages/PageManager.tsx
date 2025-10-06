import React, { lazy, useMemo, Suspense } from 'react';
import { generateStoreItems } from '../utils/itemsGenerator';
import LoadingFallback from '../components/LoadingFallback';
import ErrorBoundary from '../components/ErrorBoundary';

const StorePage = lazy(() => import('./StorePage'));
const CheckoutPage = lazy(() => import('./CheckoutPage'));
const ConfirmationPage = lazy(() => import('./ConfirmationPage'));

export function PageManager({ page }: { page: string }) {
  const items = useMemo(() => generateStoreItems(), []);
  const renderPage = () => {
    switch (page) {
      case 'store':
        return <StorePage items={items} />;
      case 'checkout':
        return <CheckoutPage />;
      case 'confirmation':
        return <ConfirmationPage />;
      default:
        return <h2>Page not found.</h2>;
    }
  };
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>{renderPage()}</Suspense>
    </ErrorBoundary>
  );
}

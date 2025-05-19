import { lazy, Suspense } from 'react';

// Lazy loading wrapper with loading fallback
export const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}; 
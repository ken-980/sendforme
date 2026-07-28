import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

// Async helper to load the dynamic interaction engine cleanly
async function loadFlyonUI() {
  return import('flyonui/flyonui');
}

export function RootLayout() {
  const location = useLocation();

  // 1. Initialize FlyonUI on application boot
  useEffect(() => {
    loadFlyonUI();
  }, []);

  // 2. Instruct FlyonUI to re-scan the DOM for dynamic attributes every time the route updates
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
        window.HSStaticMethods.autoInit();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <Outlet />;
}

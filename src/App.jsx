import { lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import ProtectedRoute from './shared/ProtectedRoute/ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TodoListPage = lazy(() => import('./pages/TodoListPage/TodoListPage'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'todos',
          element: (
            <ProtectedRoute>
              <TodoListPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return <RouterProvider router={router} />;
}

export default App;

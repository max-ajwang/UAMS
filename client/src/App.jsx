import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  HomeLayout,
  AddPaybill,
  Admin,
  AllPaybills,
  DashboardLayout,
  DeletePaybill,
  EditPaybill,
  Error,
  Landing,
  Login,
  Register,
  Stats,
  Profile,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as addPaybillAction } from './pages/AddPaybill';

import { loader as allPaybillsLoader } from './pages/AllPaybills';
// import { loader as editOrderLoader } from './pages/EditOrder';
// import { action as editOrderAction } from './pages/EditOrder';
// import { action as deleteOrderAction } from './pages/DeleteOrder';
// import { loader as adminLoader } from './pages/Admin';
// import { action as profileAction } from './pages/Profile';
// import { loader as statsLoader } from './pages/Stats';
import ErrorElement from './components/ErrorElement';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5,
//     },
//   },
// });

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
        // (queryClient),
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        // queryClient={queryClient} ,
        loader: dashboardLoader,
        // (queryClient),
        children: [
          {
            index: true,
            element: <AddPaybill />,
            action: addPaybillAction,
            // (queryClient),
          },
          {
            path: 'stats',
            element: <Stats />,
            // loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'all-paybills',
            element: <AllPaybills />,
            loader: allPaybillsLoader,
            // queryClient),
            // errorElement: <ErrorElement />,
          },
          {
            path: 'profile',
            element: <Profile />,
            // action: profileAction(queryClient),
          },
          {
            path: 'admin',
            element: <Admin />,
            // loader: adminLoader,
          },
          {
            path: 'edit-paybill/:id',
            element: <EditPaybill />,
            // loader: editOrderLoader(queryClient),
            // action: editOrderAction(queryClient),
          },
          {
            path: 'delete-paybill/:id',
            // action: deleteOrderAction(queryClient),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    // <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  );
};

export default App;

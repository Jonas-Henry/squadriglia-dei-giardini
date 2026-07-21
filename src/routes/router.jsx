import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@components/layout/MainLayout';

import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Services from '@pages/Services/Services';
import Contact from '@pages/Contact/Contact';
import Booking from '@pages/Booking/Booking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
    ],
  },
]);

export default router;

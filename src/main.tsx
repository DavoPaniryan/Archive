import { createRoot } from 'react-dom/client';
import './index.css';
import { paths } from './helpers/route.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={paths} />,
);

import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import { AddUser } from '../pages/add-user';
import { UserList } from '../pages/user-list';
import { User } from '../pages/user';

export const paths = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            { path: '/', element: <UserList /> },
            { path: '/add', element: <AddUser /> },
            { path: '/users/:id', element: <User /> },
        ],
    },
]);

import { Outlet, Link, NavLink } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white shadow-md">
                <div className="container mx-auto p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <Link to="/">User Management</Link>
                    </h1>
                    <nav>
                        <ul className="flex gap-4">
                            <li>
                                <NavLink to="/" className="hover:underline">
                                    User List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/add" className="hover:underline">
                                    Add User
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-6">
                <Outlet />
            </main>

            <footer className="bg-gray-800 text-white text-center p-4 mt-6">
                <p>
                    &copy; {new Date().getFullYear()} User Management. All
                    rights reserved.
                </p>
            </footer>
        </div>
    );
};

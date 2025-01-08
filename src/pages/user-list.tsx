import { useEffect, useState } from 'react';
import { IUser } from '../types';
import { getAllUsers } from '../helpers/api';
import { useNavigate } from 'react-router-dom';

export const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers(res);
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                User List
            </h1>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-700">
                            {user.name} {user.surname}
                        </h3>
                        <p className="text-gray-600 mt-1">Age: {user.age}</p>
                        <p className="text-gray-600">
                            Salary: ${user.salary.toLocaleString()}
                        </p>
                        <button
                            className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors"
                            onClick={() => navigate('/users/' + user.id)}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

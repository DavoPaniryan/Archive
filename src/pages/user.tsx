import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../types';
import { getUserById } from '../helpers/api';

export const User = () => {
    const [user, setUser] = useState<IUser>();
    const navigate = useNavigate();
    const { id } = useParams();
    if (!id) throw new Error();

    useEffect(() => {
        getUserById(id).then((res) => {
            setUser(res);
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-600 p-6">
                    <h1 className="text-3xl font-bold text-white">
                        {user?.name} {user?.surname}
                    </h1>
                    <p className="text-blue-200">User ID: {user?.id}</p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-600 font-medium">Age:</p>
                        <p className="text-gray-800 font-semibold">
                            {user?.age}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-600 font-medium">Salary:</p>
                        <p className="text-gray-800 font-semibold">
                            ${user?.salary}
                        </p>
                    </div>
                </div>
                <div className="p-6 bg-gray-100 text-center">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                        onClick={() => navigate('/')}>
                        back
                    </button>
                </div>
            </div>
        </div>
    );
};

import axios from "axios";
import { IInputUser, IUser } from "../types";

const Axios = axios.create({baseURL: 'http://localhost:4000'})

export const getAllUsers = async () : Promise<IUser[]> => {
    const response = await Axios.get('/users');
    return response.data
}

export const getUserById = async (id: string) : Promise<IUser> => {
    const response = await Axios.get('/users/' + id);
    return response.data
}
export const addUser = async (data : IInputUser) : Promise<IUser> => {
    const response = await Axios.post('/users',data);
    return response.data
}
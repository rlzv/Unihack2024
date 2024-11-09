import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export interface User {
    username: string;
    email: string;
    password: string;
}

export const createUser = async (userData: User) => {
    return axios.post(API_URL, userData);
};

export const authenticateUser = async (email: string, password: string) => {
    return axios.post(`${API_URL}/authenticate`, { email, password });
};

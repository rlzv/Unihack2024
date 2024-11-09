import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tours';

export interface Tour {
    _id?: string;
    name: string;
    description: string;
    categories: string[];
    destinationsKey?: string;
    destinations: {
        name: string;
        description: string;
        location: {
            coordinates: [number, number];
        };
    }[];
}

export const createTour = async (tourData: Tour) => {
    return axios.post(API_URL, tourData);
};

export const getTours = async () => {
    return axios.get(API_URL);
};

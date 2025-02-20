/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import type { RegisterData } from "../interfaces/user";

const API_BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

export const registerUser = async (data: RegisterData) => {
    try {
        // convert data.age from string to number
        const _data = { ...data, age: parseInt(data.age) };
        // remove confirmPassword from the data
        const { confirmPassword, ...newData } = _data;

        const response = await instance.post("/auth/register", newData);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};


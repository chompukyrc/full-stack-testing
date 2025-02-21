/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import type { ISignUp, ISignIn } from "../interfaces/user";

const API_BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

export const signUpUser = async (data: ISignUp) => {
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

export const signInUser = async (data: ISignIn) => {
    try {
        const response = await instance.post("/auth/login", data);
        // save the token in local storage
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};

export const checkEmailExists = async (email: string) => {
    try {
        const response = await instance.post(`/auth/check-email`, {
            email: email,
        });
        if (response.data.status === 200) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};


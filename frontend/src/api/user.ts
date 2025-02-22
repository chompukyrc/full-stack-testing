import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

export const getUserProfile = async (id: string) => {
    try {
        const response = await instance.get(`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};


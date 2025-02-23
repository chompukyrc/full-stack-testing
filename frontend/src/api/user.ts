import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

// Get User Profile
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

// Upload Profile Picture
export const uploadProfilePicture = async (userId: string, file: File) => {
    const formData = new FormData();
    formData.append("picture", file);

    try {
        const response = await instance.post(
            `/users/${userId}/profile_picture`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error uploading profile picture: ", error);
        throw error;
    }
};


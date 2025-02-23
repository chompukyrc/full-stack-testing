import { create } from "zustand";
import { getUserProfile, uploadProfilePicture } from "../api/user";

interface UserState {
    getUserProfile(id: string): Promise<void>;
    uploadProfilePicture(file: File): Promise<void>;
    user: {
        id: string;
        first_name: string;
        last_name: string;
        gender: string;
        age: number;
        phone_number: string | null;
        email: string;
        password: string;
        created_at: string;
        updated_at: string;
        picture: string | null;
    };
}

export const useUserStore = create<UserState>((set, get) => ({
    user: {
        id: "",
        first_name: "",
        last_name: "",
        gender: "",
        age: 0,
        phone_number: "",
        email: "",
        password: "",
        created_at: "",
        updated_at: "",
        picture: null,
    },

    getUserProfile: async (id: string) => {
        try {
            const res = await getUserProfile(id);
            console.log("User data: ", res.data);
            set({ user: res.data });
        } catch (error) {
            console.error("Error fetching data: ", error);
            throw error;
        }
    },

    // Upload Profile Image
    uploadProfilePicture: async (file: File) => {
        const { user } = get();
        try {
            const res = await uploadProfilePicture(user.id, file);
            set((state) => ({
                user: {
                    ...state.user,
                    picture: res.pictureUrl, // Assuming the API returns the picture URL
                },
            }));
        } catch (error) {
            console.error("Error uploading profile picture: ", error);
            throw error;
        }
    },
}));


import { create } from "zustand";
import { getUserProfile } from "../api/user";

interface UserState {
    getUserProfile(id: string): Promise<void>;
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

export const useUserStore = create<UserState>((set) => ({
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
}));


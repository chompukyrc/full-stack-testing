import { create } from "zustand";
import { genderEnum } from "../enums/gender.enum";
import type { ISignUp, ISignIn } from "../interfaces/user";

interface AuthState {
    signUpForm: ISignUp;
    setSignUpForm: (newForm: Partial<ISignUp>) => void;
    resetSignUpForm: () => void;

    signInForm: ISignIn;
    setSignInForm: (newForm: Partial<ISignIn>) => void;
    resetSignInForm: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    signUpForm: {
        first_name: "",
        last_name: "",
        age: "",
        gender: "" as genderEnum,
        phone_number: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    setSignUpForm: (newForm) =>
        set((state) => ({
            signUpForm: {
                ...state.signUpForm,
                ...newForm,
            },
        })),
    resetSignUpForm: () =>
        set(() => ({
            signUpForm: {
                first_name: "",
                last_name: "",
                age: "",
                gender: "" as genderEnum,
                phone_number: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
        })),

    signInForm: {
        email: "",
        password: "",
    },
    setSignInForm: (newForm) =>
        set((state) => ({
            signInForm: {
                ...state.signInForm,
                ...newForm,
            },
        })),
    resetSignInForm: () =>
        set(() => ({
            signInForm: {
                email: "",
                password: "",
            },
        })),
}));


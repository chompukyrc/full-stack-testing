import { genderEnum } from "../enums/gender.enum";

export interface RegisterData {
    first_name: string;
    last_name: string;
    age: string;
    gender: genderEnum;
    phone_number?: string;
    email: string;
    password: string;
    confirmPassword: string;
}


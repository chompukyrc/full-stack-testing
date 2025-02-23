import React, { useState } from "react";
import { useAuthStore } from "../../stores/auth.store";
import { signUpUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { genderEnum } from "../../enums/gender.enum";

// validation schema
const formSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    age: z.number().min(15).max(120),
    gender: z.nativeEnum(genderEnum),
    phone_number: z
        .string()
        .regex(/^\+?[0-9]\d{9,14}$/, "Invalid phone number")
        .optional(),
});

const StepTwo: React.FC = () => {
    const navigate = useNavigate();
    const { signUpForm, setSignUpForm, resetSignUpForm } = useAuthStore();
    const { first_name, last_name, age, gender, phone_number } = signUpForm;
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setSignUpForm({
            [e.target.name]: e.target.value,
        });
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // validate
            formSchema.parse({
                first_name,
                last_name,
                age: parseInt(age),
                gender,
                phone_number,
            });
            await signUpUser(signUpForm);
            alert("Sign up successfully");
            resetSignUpForm();
            navigate("/sign-in");
        } catch (validationError) {
            if (validationError instanceof z.ZodError) {
                // Map errors to inputs
                const err = validationError.flatten().fieldErrors;
                setErrors({
                    first_name: err.first_name?.[0] || "",
                    last_name: err.last_name?.[0] || "",
                    age: err.age?.[0] || "",
                    gender: err.gender?.[0] || "",
                    phone_number: err.phone_number?.[0] || "",
                });
            }
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSignUp}
                className="md:w-96 w-72 space-y-5 text-black"
            >
                <div>
                    <input
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.first_name ? "border-red-400" : ""
                        }`}
                        placeholder="First Name"
                        type="text"
                        name="first_name"
                        value={first_name}
                        onChange={handleChange}
                        required
                    />
                    {errors.first_name && (
                        <p className="text-red-400 text-sm">
                            {errors.first_name}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.last_name ? "border-red-400" : ""
                        }`}
                        placeholder="Last Name"
                        type="text"
                        name="last_name"
                        value={last_name}
                        onChange={handleChange}
                        required
                    />
                    {errors.last_name && (
                        <p className="text-red-400 text-sm">
                            {errors.last_name}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.age ? "border-red-400" : ""
                        }`}
                        placeholder="Age"
                        type="text"
                        name="age"
                        value={age}
                        onChange={handleChange}
                    />
                    {errors.age && (
                        <p className="text-red-400 text-sm">{errors.age}</p>
                    )}
                </div>
                <div>
                    <select
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.gender ? "border-red-400" : ""
                        }`}
                        name="gender"
                        value={gender}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select Gender
                        </option>
                        {/* Loop Gender Enum to Options */}
                        {Object.values(genderEnum).map((genderOption) => (
                            <option key={genderOption} value={genderOption}>
                                {genderOption}
                            </option>
                        ))}
                    </select>
                    {errors.gender && (
                        <p className="text-red-400 text-sm">{errors.gender}</p>
                    )}
                </div>
                <div>
                    <input
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.phone_number ? "border-red-400" : ""
                        }`}
                        placeholder="Phone Number"
                        type="text"
                        name="phone_number"
                        value={phone_number}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone_number && (
                        <p className="text-red-400 text-sm">
                            {errors.phone_number}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className=" w-full px-[14px] py-[10px] rounded-lg bg-[#4338CA] text-white text-sm"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default StepTwo;


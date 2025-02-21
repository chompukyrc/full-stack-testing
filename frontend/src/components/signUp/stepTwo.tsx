import React from "react";
import { useAuthStore } from "../../stores/auth.store";
import { signUpUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const StepTwo: React.FC = () => {
    const navigate = useNavigate();
    const { signUpForm, setSignUpForm, resetSignUpForm } = useAuthStore();
    const { first_name, last_name, age, gender, phone_number } = signUpForm;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm({
            [e.target.name]: e.target.value,
        });
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await signUpUser(signUpForm);
            alert("Sign up successfully");
            resetSignUpForm();
            navigate("/sign-in");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error registering user:", error.message);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSignUp} className="w-96 space-y-5 text-black">
                <input
                    className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
                    placeholder="First Name"
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={handleChange}
                    required
                />

                <input
                    className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
                    placeholder="Last Name"
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={handleChange}
                    required
                />

                <input
                    className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
                    placeholder="Age"
                    type="text"
                    name="age"
                    value={age}
                    onChange={handleChange}
                />

                <input
                    className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
                    placeholder="Gender"
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={handleChange}
                />
                <input
                    className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
                    placeholder="Phone Number"
                    type="text"
                    name="phone_number"
                    value={phone_number}
                    onChange={handleChange}
                    required
                />
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


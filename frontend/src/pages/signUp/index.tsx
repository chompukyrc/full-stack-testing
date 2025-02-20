import React, { useState } from "react";
import { registerUser } from "../../api/auth";
import type { RegisterData } from "../../interfaces/user";
import { genderEnum } from "../../enums/gender.enum";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const [formData, setFormData] = useState<RegisterData>({
        first_name: "",
        last_name: "",
        age: "",
        gender: "" as genderEnum,
        phone_number: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const {
        first_name,
        last_name,
        age,
        gender,
        phone_number,
        email,
        password,
        confirmPassword,
    } = formData;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const result = await registerUser(formData);
            console.log("Registration successful:", result);
            // reset form data
            setFormData({
                first_name: "",
                last_name: "",
                age: "",
                gender: "" as genderEnum,
                phone_number: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            // redirect to sign-in page
            return navigate("/sign-in");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error registering user:", error.message);
            }
        }
    };

    return (
        <div className="flex justify-between">
            {/* left */}
            <div className="m-auto">
                <p className="text-[24px] font-semibold mb-10">
                    Create an Account
                </p>
                <div>
                    <form
                        className="w-96 space-y-5 text-black"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="First Name"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                            value={first_name}
                            onChange={handleChange}
                            required
                            name="first_name"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                            value={last_name}
                            onChange={handleChange}
                            required
                            name="last_name"
                        />
                        <input
                            type="text"
                            placeholder="Age"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                            value={age}
                            onChange={handleChange}
                            required
                            name="age"
                        />
                        <input
                            type="text"
                            placeholder="Gender"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                            value={gender}
                            onChange={handleChange}
                            required
                            name="gender"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                            value={phone_number}
                            onChange={handleChange}
                            name="phone_number"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                            value={email}
                            onChange={handleChange}
                            required
                            name="email"
                        />

                        {/* Password */}
                        <div style={{ position: "relative" }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                                className=" w-full px-[14px] py-[10px] rounded-lg"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "12px",
                                }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Confirm password */}
                        <div style={{ position: "relative" }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleChange}
                                required
                                className=" w-full px-[14px] py-[10px] rounded-lg"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "12px",
                                }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#4338CA] text-white w-full py-[10px] rounded-lg"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>

            {/* right */}
            <div className="h-screen w-[45%] rounded-l-[36px] bg-[#4338CA]"></div>
        </div>
    );
};

export default Register;


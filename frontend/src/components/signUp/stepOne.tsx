import React, { useState } from "react";
import { useAuthStore } from "../../stores/auth.store";
import Icon from "@mdi/react";
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js";
import { checkEmailExists } from "../../api/auth";
import * as z from "zod";

interface StepOneProps {
    onNext: () => void;
}

// validation schema
const formSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string(),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
    const { signUpForm, setSignUpForm } = useAuthStore();
    const { email, password, confirmPassword } = signUpForm;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm({
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = async () => {
        try {
            // validate
            formSchema.parse({ email, password, confirmPassword });

            // Check if email already exists
            if ((await checkEmailExists(email)) == false) {
                alert("Email already exists");
                return;
            }

            // Clear errors if validation passes
            setErrors({});
            onNext();
        } catch (validationError) {
            if (validationError instanceof z.ZodError) {
                // Map errors to inputs
                const err = validationError.flatten().fieldErrors;
                setErrors({
                    email: err.email?.[0] || "",
                    password: err.password?.[0] || "",
                    confirmPassword: err.confirmPassword?.[0] || "",
                });
            }
        }
    };

    return (
        <div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="md:w-96 w-72 space-y-5 text-black"
            >
                <div>
                    <input
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.email ? "border-red-400" : ""
                        }`}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.password ? "border-red-400" : ""
                        }`}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-[10px] top-3"
                    >
                        {showPassword ? (
                            <Icon
                                path={mdiEyeOutline}
                                title="Hide Password"
                                size={"16px"}
                                color="gray"
                            />
                        ) : (
                            <Icon
                                path={mdiEyeOffOutline}
                                title="Show Password"
                                size={"16px"}
                                color="gray"
                            />
                        )}
                    </button>
                    {errors.password && (
                        <p className="text-red-400 text-sm">
                            {errors.password}
                        </p>
                    )}
                </div>

                <div className="relative">
                    <input
                        className={`w-full px-[14px] py-[10px] rounded-lg text-sm ${
                            errors.confirmPassword ? "border-red-400" : ""
                        }`}
                        placeholder="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-[10px] top-3"
                    >
                        {showPassword ? (
                            <Icon
                                path={mdiEyeOutline}
                                title="Hide Password"
                                size={"16px"}
                                color="gray"
                            />
                        ) : (
                            <Icon
                                path={mdiEyeOffOutline}
                                title="Show Password"
                                size={"16px"}
                                color="gray"
                            />
                        )}
                    </button>
                    {errors.confirmPassword && (
                        <p className="text-red-400 text-sm">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                <button
                    type="button"
                    className=" w-full px-[14px] py-[10px] rounded-lg bg-[#4338CA] text-white text-sm"
                    onClick={handleNext}
                >
                    Next
                </button>
            </form>
        </div>
    );
};

export default StepOne;


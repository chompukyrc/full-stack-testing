import React, { useState } from "react";
import { useAuthStore } from "../../stores/auth.store";
import Icon from "@mdi/react";
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js";
import { checkEmailExists } from "../../api/auth";

interface StepOneProps {
    onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
    const { signUpForm, setSignUpForm } = useAuthStore();
    const { email, password, confirmPassword } = signUpForm;
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm({
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = async () => {
        if (password !== confirmPassword) {
            alert("Passwords does not match");
            return;
        }
        // check if email already exists
        const checkEmail = await checkEmailExists(email);
        console.log(checkEmail);
        if (!checkEmail) {
            alert("Email already exists");
            return;
        }

        onNext();
    };

    return (
        <div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-96 space-y-5 text-black"
            >
                <input
                    className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <div className="relative">
                    <input
                        className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
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
                </div>
                <div className="relative">
                    <input
                        className=" w-full px-[14px] py-[10px] rounded-lg text-sm"
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


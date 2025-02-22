import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/auth.store";
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { signInUser } from "../../api/auth";

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const { signInForm, setSignInForm, resetSignInForm } = useAuthStore();
    const { email, password } = signInForm;
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignInForm({
            [e.target.name]: e.target.value,
        });
    };
    const handleSignin = async () => {
        try {
            await signInUser(signInForm);
            alert("Sign in successfully");
            navigate("/");
            resetSignInForm();
        } catch (error) {
            alert("Please check your email and password");
            console.log(error);
        }
    };

    return (
        <div className="flex justify-between">
            <div className="m-auto">
                <p className="text-[24px] font-semibold mb-10">Sign in</p>
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
                    <button
                        type="button"
                        className=" w-full px-[14px] py-[10px] rounded-lg bg-[#4338CA] text-white text-sm"
                        onClick={handleSignin}
                    >
                        Sign In
                    </button>
                    <p className="text-center">
                        <span className=" text-[#AEB9E1]">
                            Don't have an account?{" "}
                        </span>
                        <span
                            className="text-[#1677FF] cursor-pointer"
                            onClick={() => navigate("/sign-up")}
                        >
                            Sign up
                        </span>
                    </p>
                </form>
            </div>
            <div className="h-screen w-[45%] rounded-l-[36px] bg-[#4338CA]"></div>
        </div>
    );
};

export default SignIn;


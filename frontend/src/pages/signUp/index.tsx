import React, { useState } from "react";
import StepOne from "../../components/signUp/stepOne";
import StepTwo from "../../components/signUp/stepTwo";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep(2);

    return (
        <div className="flex justify-center items-center md:justify-between h-screen">
            {/* left */}
            <div className="m-auto space-y-5">
                <p className="text-[24px] font-semibold mb-10">
                    Create an Account
                </p>
                <div>
                    {currentStep === 1 ? (
                        <StepOne onNext={nextStep} />
                    ) : (
                        <StepTwo />
                    )}
                </div>
                <p className="text-center">
                    <span className=" text-[#AEB9E1]">
                        Already have an account?{" "}
                    </span>
                    <span
                        className="text-[#1677FF] cursor-pointer"
                        onClick={() => navigate("/sign-in")}
                    >
                        Sign in
                    </span>
                </p>
            </div>

            {/* right */}
            <div className="h-screen w-[45%] rounded-l-[36px] bg-[#4338CA] max-md:hidden"></div>
        </div>
    );
};

export default SignUp;


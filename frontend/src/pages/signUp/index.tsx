import React, { useState } from "react";
import StepOne from "../../components/signUp/stepOne";
import StepTwo from "../../components/signUp/stepTwo";

const SignUp: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep(2);

    return (
        <div className="flex justify-between">
            {/* left */}
            <div className="m-auto">
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
            </div>

            {/* right */}
            <div className="h-screen w-[45%] rounded-l-[36px] bg-[#4338CA]"></div>
        </div>
    );
};

export default SignUp;


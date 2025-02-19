export default function SignUp() {
    return (
        <div className="flex justify-between">
            {/* left */}
            <div className="m-auto">
                <p className="text-[24px] font-semibold mb-10">
                    Create an Account
                </p>
                <div>
                    <form className="w-96 space-y-5 text-black">
                        <input
                            type="text"
                            placeholder="First Name"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Age"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Gender"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className=" w-full px-[14px] py-[10px] rounded-lg"
                        />
                        <button className="bg-[#4338CA] text-white w-full py-[10px] rounded-lg">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>

            {/* right */}
            <div className="h-screen w-[45%] rounded-l-[36px] bg-[#4338CA]"></div>
        </div>
    );
}


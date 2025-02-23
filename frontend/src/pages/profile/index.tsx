import React, { useRef } from "react";
import { useUserStore } from "../../stores/user.store";
import Layout from "../../components/layout";

const Profile: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { user, uploadProfilePicture } = useUserStore();

    const mockId = "1282ba1f-1fc5-4598-8b0c-0143c5c0eaab";
    // call function to get user profile
    React.useEffect(() => {
        useUserStore.getState().getUserProfile(mockId);
    }, []);

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            await uploadProfilePicture(file);
            // get new user profile
            useUserStore.getState().getUserProfile(mockId);
        }
    };

    return (
        <Layout>
            <div className="h-screen w-full flex flex-col items-center justify-center space-y-8">
                <div className=" text-4xl">Profile Image</div>
                <img
                    src={`data:image/png;base64,${user.picture ?? ""}`}
                    alt="User"
                    className=" w-52 h-52 rounded-full border object-cover"
                />
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Upload Profile Picture
                </button>
            </div>
        </Layout>
    );
};

export default Profile;


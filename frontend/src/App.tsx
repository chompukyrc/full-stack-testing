import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn.tsx";
import SignUp from "./pages/signup.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}


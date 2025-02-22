import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;


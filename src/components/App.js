import Reset from "../styles/reset.style";
import GlobalStyle from "../styles/global.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Home from "./Habits/Habits";

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro/" element={<SignUp />} />
                    <Route path="/habitos/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

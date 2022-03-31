import Reset from "../styles/reset.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Home from "./Habits/Habits";
import { useState, useEffect } from "react";
import GlobalStyle from "../styles/global.style";
import TodayContext from "../contexts/TodayContext";
import axios from "axios";

function App() {
    const [todayHabits, setTodayHabits] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            return;
        }
        const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.get(URL, config);
        promise.then((response) => {
            setTodayHabits(response.data);
        });
        promise.catch((err) => console.log(err.response));
    }, []);

    return (
        <TodayContext.Provider value={{ todayHabits, setTodayHabits }}>
            <Reset />
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro/" element={<SignUp />} />
                    <Route path="/habitos/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </TodayContext.Provider>
    );
}

export default App;

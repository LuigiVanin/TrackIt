import Reset from "../styles/reset.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Home from "./Habits/Habits";
import { useState, useEffect } from "react";
import GlobalStyle from "../styles/global.style";
import TodayContext from "../contexts/TodayContext";
import axios from "axios";
import TodayPage from "./Today/Today";
import History from "./HistoryPage/History";

function App() {
    const [todayHabits, setTodayHabits] = useState([]);
    const [todayRequest, setTodayRequest] = useState(false);

    function refreshToday() {
        setTodayRequest(!todayRequest);
    }

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
            console.log("TodayRefresh");
        });
        promise.catch((err) => console.log(err.response));
    }, [todayRequest]);

    return (
        <TodayContext.Provider
            value={{
                todayHabits,
                setTodayHabits,
                refreshToday,
            }}
        >
            <Reset />
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro/" element={<SignUp />} />
                    <Route path="/habitos/" element={<Home />} />
                    <Route path="/hoje/" element={<TodayPage />} />
                    <Route path="/historico" element={<History />} />
                </Routes>
            </BrowserRouter>
        </TodayContext.Provider>
    );
}

export default App;

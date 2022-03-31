import axios from "axios";
import { useState, useEffect, useContext } from "react";
import TodayContext from "../../contexts/TodayContext";
import Header from "../Header/Header";
import { HomeContainer, HabitBox, CreateHabit } from "./Habits.style";

function Home() {
    const [habits, setHabits] = useState([]);
    const context = useContext(TodayContext);
    console.log(context);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.get(URL, config);
        promise.then((response) => {
            console.log(response.data);
            setHabits(response.data);
        });
        promise.catch((err) => console.log(err));
    }, []);

    function renderHabits() {
        return habits.length === 0 ? (
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </p>
        ) : (
            habits.map((habit, idx) => {
                return <h1>{idx}</h1>;
            })
        );
    }
    return (
        <>
            <Header />
            <HomeContainer>
                <CreateHabit>
                    <h1>Meus Hábitos</h1>
                    <button>+</button>
                </CreateHabit>
                <HabitBox>{renderHabits()}</HabitBox>
            </HomeContainer>
        </>
    );
}

export default Home;

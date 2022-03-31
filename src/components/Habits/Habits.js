import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import TodayContext from "../../contexts/TodayContext";
import { Container } from "../../styles/components";
import HabitForm from "../HabitForm/HabitForm";
import Header from "../Header/Header";
import { HomeContainer, HabitBox, CreateHabit } from "./Habits.style";

function Home() {
    const [habits, setHabits] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [endRequest, setEndRequest] = useState(false);
    const [showForm, setShowForm] = useState(false);
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
        setEndRequest(false);
        const promise = axios.get(URL, config);
        promise.then((response) => {
            console.log(response.data);
            setHabits(response.data);
            setEndRequest(true);
        });
        promise.catch((err) => console.log(err));
    }, [refresh]);

    function renderHabits() {
        return !endRequest && habits.length === 0 ? (
            <ThreeDots color="#126ba5" />
        ) : habits.length === 0 ? (
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </p>
        ) : (
            <>
                {habits.map((habit, idx) => {
                    return <h1>{idx}</h1>;
                })}
                {!endRequest ? <ThreeDots color="#126ba5" /> : <></>}
            </>
        );
    }

    function refreshDataControl() {
        setRefresh(!refresh);
    }
    return (
        <>
            <Header />
            <Container width="100%" color="#E5E5E5">
                <HomeContainer>
                    <CreateHabit>
                        <h1>Meus Hábitos</h1>
                        <button onClick={() => setShowForm(true)}>+</button>
                    </CreateHabit>
                    {showForm ? (
                        <HabitForm
                            closeForm={() => setShowForm(false)}
                            refreshData={refreshDataControl}
                            endRequest={endRequest}
                        />
                    ) : (
                        <></>
                    )}
                    <HabitBox>{renderHabits()}</HabitBox>
                </HomeContainer>
            </Container>
        </>
    );
}

export default Home;

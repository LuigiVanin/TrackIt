import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Container } from "../../styles/components";
import HabitBox from "../HabitBox/HabitBox";
import HabitForm from "../HabitForm/HabitForm";
import Header from "../Header/Header";
import { HomeContainer, HabitContainer, CreateHabit } from "./Habits.style";
import Footer from "../Footer/Footer";
import Theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";

function Home() {
    const [habits, setHabits] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [endRequest, setEndRequest] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [defaultForm, setDefaultForm] = useState({
        name: "",
        days: [],
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/");
            return;
        }
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
            setHabits(response.data);
            setEndRequest(true);
        });
        promise.catch(() =>
            alert("Há algum erro com seus hábitos, tente novamente")
        );
    }, [refresh, navigate]);

    function refreshDataControl() {
        setRefresh(!refresh);
    }

    function renderHabits() {
        return !endRequest && habits.length === 0 ? (
            <ThreeDots color={Theme.colors.lightBlue} />
        ) : habits.length === 0 ? (
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </p>
        ) : (
            <>
                {habits.map((habit, idx) => {
                    return (
                        <HabitBox
                            key={idx}
                            data={habit}
                            refreshData={refreshDataControl}
                        />
                    );
                })}
                {!endRequest ? <ThreeDots color="white" /> : <></>}
            </>
        );
    }

    return (
        <>
            <Header />
            <Container width="100%" color={Theme.colors.backgroundGray}>
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
                            defaultValue={defaultForm}
                            defaultSetter={setDefaultForm}
                        />
                    ) : (
                        <></>
                    )}
                    <HabitContainer>{renderHabits()}</HabitContainer>
                </HomeContainer>
            </Container>
            <Footer />
        </>
    );
}

export default Home;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HistoryHabit from "../HistoryHabit/HistoryHabit";
import {
    CalanderWrapper,
    HistoryContainer,
    DaysContainer,
} from "./History.style";
import { Container, Title } from "../../styles/components";
import Theme from "../../styles/theme";
import Calender from "react-calendar";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function History() {
    const navigate = useNavigate();
    const [daySelected, setDaySelected] = useState();
    const [selectedDay, setSelectedDay] = useState(undefined);
    const [history, setHistory] = useState([
        { day: "", habits: [{ done: null }] },
    ]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/");
            return;
        }
        const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.get(URL, config);
        promise.then((response) => {
            setHistory(response.data);
        });
        promise.catch((err) => console.log(err.response));
    }, [navigate]);

    function formatDate(date) {
        date = date.split("/");
        [date[0], date[1]] = [date[1], date[0]];
        return new Date(date.join("/"));
    }

    function isSameDay(date1, date2) {
        if (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        ) {
            return true;
        }
        return false;
    }

    function isEverythingDone(day) {
        for (const i of day.habits) {
            if (i.done === false) {
                return false;
            }
        }
        return true;
    }

    function specialDay({ date }) {
        for (const i of history) {
            if (isSameDay(formatDate(i.day), date)) {
                if (isEverythingDone(i)) {
                    return "great";
                } else {
                    return "fail";
                }
            }
        }
    }

    function selectDay(date) {
        const day = history.find((item) => {
            if (isSameDay(formatDate(item.day), date)) {
                return item.day;
            }
            return undefined;
        });
        setSelectedDay(day);
    }

    function renderDayHistory() {
        if (selectedDay === undefined) {
            return (
                <>
                    <h1 className="availabel">Hábitos</h1>
                    <h1 className="disable">
                        Não existe registro nesse dia...
                    </h1>
                </>
            );
        }
        return <HistoryHabit history={selectedDay} />;
    }

    return (
        <>
            <Header />
            <Container color={Theme.colors.backgroundGray} width="100%">
                <HistoryContainer>
                    <Title>
                        <h1>Histórico</h1>
                    </Title>
                    <CalanderWrapper>
                        <Calender
                            className="my-calender"
                            onChange={setDaySelected}
                            value={daySelected}
                            tileClassName={specialDay}
                            onClickDay={selectDay}
                        />
                    </CalanderWrapper>
                    <DaysContainer>{renderDayHistory()}</DaysContainer>
                </HistoryContainer>
            </Container>
            <Footer />
        </>
    );
}

export default History;

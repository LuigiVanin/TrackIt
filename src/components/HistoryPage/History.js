import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CalanderWrapper, HistoryContainer } from "./History.style";
import { Container, Title } from "../../styles/components";
import Theme from "../../styles/theme";
import Calender from "react-calendar";
import { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";
import axios from "axios";

function History() {
    const [daySelected, setDaySelected] = useState();
    const [history, setHistory] = useState([
        { day: "", habits: [{ done: null }] },
    ]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.get(URL, config);
        promise.then((response) => {
            console.log(response.data);
            setHistory(response.data);
        });
        promise.catch((err) => console.log(err.response));
    }, []);

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
                        />
                    </CalanderWrapper>
                </HistoryContainer>
            </Container>
            <Footer />
        </>
    );
}

export default History;

import { TodayBox, HabitInfo, CheckMark, Span } from "./TodayHabit.style";
import Checkmark from "../../assets/Checkmark.svg";
import axios from "axios";
import { useContext } from "react";
import TodayContext from "../../contexts/TodayContext";
import { useState } from "react";

function TodayHabit(props) {
    const { id, name, currentSequence, highestSequence, done } = props.data;
    const { refreshToday } = useContext(TodayContext);
    const URL_CHECK_HABIT = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const URL_UNCHECK_HABIT = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const [selected, setSelected] = useState(done);

    function toggleHabit() {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = done
            ? axios.post(URL_UNCHECK_HABIT, {}, config)
            : axios.post(URL_CHECK_HABIT, {}, config);

        promise.then((response) => {
            refreshToday();
        });
        promise.catch((err) => {
            refreshToday();
            console.log(err.response);
            alert("Algum erro aconteceu! Não foi possível registrar atividade");
        });
    }

    return (
        <TodayBox
            onClick={() => {
                setSelected(!done);
                toggleHabit();
            }}
        >
            <HabitInfo>
                <h1>{name}</h1>
                <p>
                    Sequência atual:
                    <Span done={done}> {currentSequence} dias</Span>
                </p>
                <p>
                    Seu recorde:
                    <Span
                        done={
                            highestSequence === currentSequence &&
                            highestSequence !== 0
                        }
                    >
                        {" "}
                        {highestSequence} dias
                    </Span>
                </p>
            </HabitInfo>
            <CheckMark done={selected}>
                <img src={Checkmark} alt="X" />
            </CheckMark>
        </TodayBox>
    );
}

export default TodayHabit;

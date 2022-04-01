import axios from "axios";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Inputs } from "../../styles/components";
import {
    CreateHabitForm,
    ButtonBox,
    ButtonForm,
    SelectDay,
} from "./HabitForm.style";
import { Day } from "../../styles/components";
import TodayContext from "../../contexts/TodayContext";

function HabitForm(props) {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const { refreshToday } = useContext(TodayContext);
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const TOKEN = localStorage.getItem("token");

    function cancelForm() {
        setName("");
        props.closeForm();
    }

    function selectDaysForm(num) {
        if (days.indexOf(num) === -1) {
            days.push(num);
            setDays([...days]);
            return;
        }
        setDays(days.filter((item) => (item === num ? 0 : 1)));
    }

    function isThemeRevesed(num) {
        return days.indexOf(num) === -1 ? "" : "reverse";
    }

    function isDisabled() {
        return props.endRequest ? "" : "disabled";
    }

    function habitPostRequest() {
        const config = {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        };
        if (name.trim() === "" || days.length === 0) {
            alert("preenchas os campos corretamente");
            return;
        }
        const promise = axios.post(URL, { name, days }, config);
        promise.then(() => {
            props.refreshData();
            refreshToday();
            setName("");
            setDays([]);
        });
        promise.catch((err) => console.log(err.request));
    }

    function changeName(event) {
        setName(event.target.value);
    }

    return (
        <CreateHabitForm
            className={isDisabled()}
            onSubmit={(event) => {
                event.preventDefault();
                console.log({ name, days });
                habitPostRequest();
            }}
        >
            <Inputs
                type="text"
                placeholder="nome do hábito"
                value={name}
                onChange={changeName}
                disabled={isDisabled()}
                required
            />

            <SelectDay>
                {weekdays.map((day, idx) => {
                    return (
                        <Day
                            key={idx}
                            theme={isThemeRevesed(idx)}
                            onClick={() => selectDaysForm(idx)}
                        >
                            {day}
                        </Day>
                    );
                })}
            </SelectDay>
            <ButtonBox>
                <ButtonForm type="submit" disabled={isDisabled()}>
                    {!isDisabled() ? (
                        "Salvar"
                    ) : (
                        <ThreeDots color="white" width="50px" />
                    )}
                </ButtonForm>
                <ButtonForm
                    theme="reverse"
                    type="button"
                    onClick={cancelForm}
                    disabled={isDisabled()}
                >
                    Cancelar
                </ButtonForm>
            </ButtonBox>
        </CreateHabitForm>
    );
}

export default HabitForm;

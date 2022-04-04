import { Box, Day } from "../../styles/components";
import { SelectDay, Icon } from "./HabitBox.style";
import TrashIcon from "../../assets/Trash.svg";
import axios from "axios";
import { useContext } from "react";
import TodayContext from "../../contexts/TodayContext";

function HabitBox(props) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const { name, days, id } = props.data;
    const { refreshData } = props;
    const { refreshToday } = useContext(TodayContext);

    function deleteRequest() {
        const warning = window.confirm(
            "Ten cereteza que quer apagar esse hábito?"
        );
        if (!warning) {
            return;
        }
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const promise = axios.delete(URL, config);
        promise.then(() => {
            refreshData();
            refreshToday();
        });
        promise.catch((err) => console.log(err.response));
    }

    return (
        <Box>
            <Icon
                src={TrashIcon}
                alt="X"
                onClick={() => {
                    deleteRequest();
                }}
            />
            <h1>{name}</h1>
            <SelectDay>
                {weekdays.map((item, idx) => {
                    const theme =
                        days.indexOf(idx) !== -1 ? "reverse" : "normal";
                    return (
                        <Day theme={theme} key={idx}>
                            {item}
                        </Day>
                    );
                })}
            </SelectDay>
        </Box>
    );
}

export default HabitBox;

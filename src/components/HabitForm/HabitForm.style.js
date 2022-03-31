import styled from "styled-components";
import { Button, Box, disabledComponent } from "../../styles/components";

export const CreateHabitForm = styled(Box.withComponent("form"))`
    margin-top: 10px;
    padding: 20px;
    ${disabledComponent}
`;

export const ButtonBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    gap: 5px;
`;

export const ButtonForm = styled(Button)`
    width: auto;
    font-size: 16px;
    height: 33px;
    padding-inline: 15px;
`;

export const SelectDay = styled.div`
    display: flex;
    gap: 5px;
`;

export const Day = styled.div`
    width: 23px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    border-radius: 4px;
    border: 1px solid #d5d5d5;
    background: ${(props) => (props.theme !== "reverse" ? "white" : "#D5D5D5")};
    color: ${(props) => (props.theme !== "reverse" ? "#D5D5D5" : "white")};
    cursor: pointer;
`;

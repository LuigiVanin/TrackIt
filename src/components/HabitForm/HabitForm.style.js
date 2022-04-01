import styled, { keyframes } from "styled-components";
import { Button, Box, disabledComponent } from "../../styles/components";

const popInAnimation = keyframes`
        0% {
            transform: scale(0.1);
        }

        80% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
`;

export const CreateHabitForm = styled(Box.withComponent("form"))`
    margin-top: 10px;
    padding: 20px;
    ${disabledComponent}
    animation: ${popInAnimation};
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
`;

export const ButtonBox = styled.div`
    margin-top: 17px;
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

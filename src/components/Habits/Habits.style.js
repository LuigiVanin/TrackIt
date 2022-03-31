import { Container, maxWidthPage } from "../../styles/components";
import styled from "styled-components";

export const HomeContainer = styled(Container)`
    width: 90%;
    padding-top: 70px;
    background-color: transparent;
    ${maxWidthPage}
`;

export const HabitBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 25px;

    p {
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`;

export const CreateHabit = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-top: 20px;
    h1 {
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126ba5;
    }

    button {
        background: #52b6ff;
        border: none;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        font-size: 27px;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }
`;

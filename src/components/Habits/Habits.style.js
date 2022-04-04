import { Container, maxWidthPage } from "../../styles/components";
import styled from "styled-components";
import Theme from "../../styles/theme";

export const HomeContainer = styled(Container)`
    width: 90%;
    padding-top: 70px;
    padding-bottom: 105px;
    background-color: transparent;
    ${maxWidthPage}
`;

export const HabitContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 25px;
    gap: 20px;

    p {
        font-size: 118pxx;
        line-height: 22px;

        color: ${Theme.colors.softBlack};
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
        color: ${Theme.colors.DarkBlue};
    }

    button {
        background: ${Theme.colors.lightBlue};
        border: none;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        font-size: 27px;
        color: ${Theme.colors.white};
        font-weight: 600;
        cursor: pointer;
    }
`;

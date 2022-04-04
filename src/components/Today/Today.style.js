import styled from "styled-components";
import { Container, maxWidthPage } from "../../styles/components";
import Theme from "../../styles/theme";

export const TodayContainer = styled(Container)`
    width: 90%;
    padding-top: 70px;
    padding-bottom: 85px;
    background: transparent;
    ${maxWidthPage}
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 50px;
    margin-top: 20px;
    h1 {
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: ${Theme.colors.DarkBlue};
    }
    p {
        color: ${Theme.colors.hardGray};
        span {
            color: ${Theme.colors.green};
        }
    }
`;

export const HabitContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 25px;
    gap: 20px;
`;

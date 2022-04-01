import styled from "styled-components";
import { Box } from "../../styles/components";
import Theme from "../../styles/theme";

export const TodayBox = styled(Box)`
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 12px;
`;

export const Span = styled.span`
    color: ${(props) =>
        props.done ? Theme.colors.green : Theme.colors.softBlack};
`;

export const HabitInfo = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        margin-top: 3px;
        margin-bottom: 10px;
        color: ${Theme.colors.softBlack};
        font-size: 17px;
    }

    p {
        font-size: 14px;
        color: ${Theme.colors.softBlack};
    }
`;

export const CheckMark = styled.div`
    width: 64px;
    height: 64px;
    background-color: ${(props) =>
        props.done ? Theme.colors.green : Theme.colors.backgroundGray};
    border: 1px solid ${Theme.colors.backgroundGray};
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        color: white;
    }
`;

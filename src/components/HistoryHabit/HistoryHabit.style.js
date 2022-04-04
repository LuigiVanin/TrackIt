import styled from "styled-components";
import { Box } from "../../styles/components";
import Theme from "../../styles/theme";

export const HistoryHabitBox = styled(Box)`
    gap: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HistorytInfo = styled.div`
    h2 {
        margin-top: 0;
        margin-bottom: 6px;
        font-size: 17px;
    }
    p {
        font-size: 15px;
        &.done {
            color: ${Theme.colors.green};
        }
    }
`;

export const SymbolBox = styled.div`
    border-radius: 5px;
    height: 55px;
    width: 55px;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;

    ion-icon {
        color: ${Theme.colors.backgroundGray};
        font-size: 28px;
        --ionicon-stroke-width: 48px;
    }
`;

import styled from "styled-components";
import { Container, maxWidthPage } from "../../styles/components";
import Theme from "../../styles/theme";

export const HistoryContainer = styled(Container.withComponent("div"))`
    width: 90%;
    padding-top: 70px;
    padding-bottom: 105px;
    background-color: transparent;
    ${maxWidthPage}

    p {
        color: ${Theme.colors.softBlack};
    }
`;

export const DaysContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 35px;
    gap: 10px;

    h1 {
        width: 100%;
        text-align: left;
        margin-block: 10px;

        &.disable {
            font-size: 17px;
            color: ${Theme.colors.softBlack};
        }

        &.availabel {
            font-size: 22px;
            color: ${Theme.colors.DarkBlue};
        }
    }
`;

export const CalanderWrapper = styled.div`
    width: 100%;

    .my-calender {
        border-radius: 10px;
        border: none;
        width: auto;
        height: 300px;
        padding-block: 15px;
        box-shadow: 0 0 13px 3px rgba(0, 0, 0, 0.158);
        .react-calendar__navigation button {
            font-size: 16px;
        }

        button.react-calendar__tile {
            font-size: 15px;
            width: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            z-index: 4;
        }

        button.react-calendar__tile * {
            z-index: 10;
        }

        .great {
            position: relative;
            &::after {
                content: "";
                position: absolute;

                background-color: ${Theme.colors.green};
                width: 35px;
                height: 35px;
                border-radius: 50%;
                z-index: 9;
            }
        }
        .fail {
            position: relative;
            &::after {
                content: "";
                position: absolute;

                background-color: ${Theme.colors.red};
                width: 35px;
                height: 35px;
                border-radius: 50%;
                z-index: 9;
            }
        }
    }
`;

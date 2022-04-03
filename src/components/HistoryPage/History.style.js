import styled from "styled-components";
import { Container, maxWidthPage } from "../../styles/components";
import Theme from "../../styles/theme";

export const HistoryContainer = styled(Container.withComponent("div"))`
    width: 90%;
    padding-top: 70px;
    padding-bottom: 85px;
    background-color: transparent;
    ${maxWidthPage}

    p {
        color: ${Theme.colors.softBlack};
    }
`;

export const CalanderWrapper = styled.div`
    margin-top: 15px;
    width: 100%;

    .my-calender {
        border-radius: 10px;
        border: none;
        width: auto;
        height: 300px;
        padding-block: 15px;
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.178);
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

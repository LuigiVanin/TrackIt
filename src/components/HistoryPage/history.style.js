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

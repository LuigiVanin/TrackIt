import styled from "styled-components";
import Theme from "../../styles/theme";

export const NavBarBottom = styled.footer`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 10;

    a {
        text-decoration: none;
        color: ${Theme.colors.lightBlue};
    }

    .progress-bar {
        position: absolute;
        bottom: 0px;
        width: 90px;
    }
`;

export const ProgressBarWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;

    a {
        display: flex;
        justify-content: center;
        width: 100%;
        border-radius: 50%;
    }
`;

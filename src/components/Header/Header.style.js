import styled from "styled-components";

export const NavBarTop = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-inline: 25px;
    align-items: center;
    z-index: 10;

    img {
        width: 100px;
    }
`;

export const RoundImage = styled.div`
    width: ${(props) => (props.size === undefined ? "20px" : props.size)};
    height: ${(props) => (props.size === undefined ? "20px" : props.size)};
    border-radius: 50%;
    border: none;
    background-color: transparent;
    background: url(${(props) => props.image}) no-repeat;
    background-position: center;
    background-size: cover;
`;

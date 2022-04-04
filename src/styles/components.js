import styled from "styled-components";
import Theme from "./theme";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${(props) => (!props.width ? "87%" : props.width)};
    background-color: ${(props) => (!props.color ? "white" : props.color)};
    margin-inline: auto;
    min-height: 100vh;
`;

export const Inputs = styled.input`
    border: 1px solid ${Theme.colors.softGray};
    border-radius: 4px;
    padding-inline: 10px;
    outline: none;
    height: 45px;
    width: 100%;
    font-size: 17px;

    &::placeholder {
        color: ${Theme.colors.softGray};
        font-family: "Lexend Deca", sans-serif;
        font-size: 17px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    outline: none;
    height: 45px;
    width: 100%;
    font-size: 17px;
    font-family: "Lexend Deca", sans-serif;
    border: none;
    cursor: pointer;
    background: ${(props) =>
        props.theme === "reverse" ? "white" : Theme.colors.lightBlue};
    color: ${(props) =>
        props.theme === "reverse" ? Theme.colors.lightBlue : "white"};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Bar = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    background: ${(props) => props.color};
    ${(props) => props.position}: 0px;
    box-shadow: 0px 3px 16px 5px rgba(0, 0, 0, 0.23);
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    gap: 10px;
    position: relative;
    z-index: 0;
    box-shadow: 0 0 10px 3px #00000015;
`;

export const Day = styled.div`
    width: 26px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid ${Theme.colors.softGray};
    background: ${(props) =>
        props.theme !== "reverse" ? "white" : Theme.colors.softGray};
    color: ${(props) =>
        props.theme !== "reverse" ? Theme.colors.softGray : "white"};
    cursor: pointer;
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

export const disabledComponent = `
    &.disabled {
        opacity: 0.8;
    }
`;

export const maxWidthPage = `
    @media (min-width: 500px) {
        width: calc(500px * 0.9);
    }
`;

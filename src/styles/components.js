import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    width: 87%;
    margin-inline: auto;
    min-height: 100vh;
`;

export const Inputs = styled.input`
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    padding-inline: 10px;
    outline: none;
    height: 45px;
    width: 100%;
    font-size: 17px;

    &::placeholder {
        color: #d5d5d5;
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
    background: #52b6ff;
    color: white;
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
    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.35);
    align-items: center;
    justify-content: center;
`;

export const disabledComponent = `
    &.disabled {
        opacity: 0.8;
    }
`;

export const maxWidthPage = `
    @media (min-width: 425px) {
        width: calc(425px * 0.9);
    }
`;

import styled from "styled-components";
import {
    Container,
    disabledComponent,
    maxWidthPage,
} from "../../styles/components";

export const SignUpContainer = styled(Container)`
    background: white;
    padding-top: 12vh;
    img {
        height: 180px;
        margin-bottom: 35px;
    }

    a {
        color: #52b6ff;
        font-weight: 400;
        text-align: center;
        font-size: 14px;
        margin-top: 30px;
    }

    ${maxWidthPage}
`;

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    ${disabledComponent}
`;

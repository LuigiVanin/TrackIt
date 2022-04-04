import styled from "styled-components";
import { Box } from "../../styles/components";

export const HabitBoxField = styled(Box)`
    /* &:hover {
        background-color: red;
    } */
`;

export const SelectDay = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-top: 10px;
`;

export const Icon = styled.img`
    width: 15px;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
`;

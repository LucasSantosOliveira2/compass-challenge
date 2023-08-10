import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
`

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
`

export const Input = styled.input`
    padding: 10px;
    width:300px;
    height: 52px;
    border: 1.5px dashed ${(props) => props.theme.colors.background};
    border-radius: 10px;
    outline: none;
 @media screen and (min-width: 768px) {
    width: 368px;
 }
    `
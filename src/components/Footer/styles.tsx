import { styled } from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
 `
export const LogoTitle = styled.h1`
    font-size: 1.75rem;
    font-weight: 800;  
    color: ${(props) => props.theme.colors.white}; 
`
import { styled } from "styled-components"


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
 `
export const LogoTitle = styled.h1`
    font-size: 1.75rem;
    font-weight: 700;   
    color: ${(props) => props.theme.colors.text};
`

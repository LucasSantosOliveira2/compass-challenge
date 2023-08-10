import { styled } from 'styled-components';

export const Button = styled.button`
    width: 244px;
    height: 66px;
    border-radius: 10px;
    border: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.background};
    cursor: pointer;
`

export const NavButton = styled.button`
    width: 96px;
    height: 48px;
    border-radius: 10px;
    border: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.text};
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
`
import { styled } from "styled-components";
import { Link } from 'react-router-dom';


export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
    gap: 30px;
    padding: 30px 0px;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: 100px 0px;
    }

`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 100px;
        gap: 20px;
    }
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

export const LinksContainer = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 60px;
    }
`

export const Links = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
    
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }

`

export const Contact = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
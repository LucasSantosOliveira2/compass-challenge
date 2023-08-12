import { styled } from "styled-components";

export const Container = styled.div`
    width: 205px;
    height: 374px;
    border-color: ${(props) => props.theme.colors.cardBackground};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:20px;
    padding: 25px;
`

export const Title = styled.h1`
    font-family: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    font-weight: 500;
    `

export const SecondContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const Info = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    font-family: ${(props) => props.theme.colors.text};
`

export const Location = styled(Info)`
    color: ${(props) => props.theme.colors.primary};
`;

export const Image = styled.img`
    width: 100%;
    max-width: 170px;
    height: 256px;
    border-radius: 10px;
`
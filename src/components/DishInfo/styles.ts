import { styled } from "styled-components";

export const DishContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 10px;
    }
`
export const DishInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const DishName = styled.h1`
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
`

export const DishPrice = styled.p`
    font-size: 0.85rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};
`

export const DishDescription = styled.p`
     font-size: 0.85rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
    max-width: 400px;

`

export const StyledButton = styled.button`
    width: 99px;
    height: 54px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    color: #1AC84B;
    font-size: 1rem;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
    border: none;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    left:20%;
    transform: translateY(25%);
`

export const DishImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%; 
    margin: 0 auto;
`
export const ImageContainer = styled.div`
    position: relative;
`

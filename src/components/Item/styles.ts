import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    gap: 10px;
`

export const RestaurantName = styled.p`
    font-size: 0.85rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
    span{
        color: ${(props) => props.theme.colors.background};
    }
`

export const ItemSeleciontContainer = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
   justify-content: space-between;
`

export const NameDish = styled.h1`
    font-size: 0.85rem;
    font-weight: 500;
`

export const Price = styled(RestaurantName)`
    color: ${(props) => props.theme.colors.primary};
`

export const DishContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Number = styled.h1`
    font-size: 1.25rem;
    color: #404040;
    font-weight: 400;

`
export const CounterImage = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
`


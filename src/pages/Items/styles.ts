import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.text};
    gap: 20px;
    padding: 30px 30px;
    width: 100%;
    @media screen and (min-width: 768px) {
        padding: 30px 100px;
    }
`

export const Headling = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    color: ${(props) => props.theme.colors.white};
    @media screen and (min-width: 480px) {
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 15px;
    }
    @media screen and (min-width: 1024px) {
        gap: 60px;
    }

`

export const RestaurantContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
 
`

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 600;
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`

export const Location = styled.p`
    font-size: 0.65rem;
    font-weight: 400;
    @media screen and (min-width: 768px) {
        font-size: 0.85rem;
    }
`

export const Text = styled(Location)`
    font-weight: 500;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
`

export const Column = styled.div`
    width: 1px;
    height: 50px;
    stroke-width: 1px;
    background-color: ${(props) => props.theme.colors.white};
`

export const Box = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
`

export const OffersContainer = styled.div`
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    border-radius: 20px;
    border: 2px dashed ${(props) => props.theme.colors.background};
`

export const RestaurantImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: 200px;
    border-radius: 20px;


`
export const OffersTitle = styled.h1`
    font-size: 1.15rem;
    color:${(props) => props.theme.colors.background};
    font-weight: 500;
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`
export const OfferInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`
export const OfferInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const SecondContainer = styled(Container)`
    background-color: ${(props) => props.theme.colors.white};
`

export const Select = styled.select`
    width: 100%;
    max-width: 300px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    font-size: 0.85rem;
    font-weight: 600;
    color:${(props) => props.theme.colors.background};
    outline: none;
    cursor: pointer;
    option{
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        border: none;
        color:${(props) => props.theme.colors.background};
        padding: 5px; 
        
    }

`
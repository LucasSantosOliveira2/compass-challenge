import { styled } from "styled-components";


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: 30px 100px;
    }
`
export const SecondContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (min-width: 768px) {
        gap:15px;
}
`

export const InputDisplay = styled.div`
    display: none;
    @media screen and (min-width: 1024px) {
        display: block;
    }
`
export const InputContainer = styled.div`
    display: flex;
    align-items:center;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #808080;
    padding: 10px 10px;
    opacity: 0.75;
    
    @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 28.125rem;
    padding: 10px 20px;
    gap: 10px;
    height: 49px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.white};
    }
`

export const Input = styled.input`
    width: 328px;
    border: none;
    outline: none;
    color: #808080;
    font-size: 1rem;
    font-weight: 500;
`
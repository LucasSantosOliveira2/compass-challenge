import { styled } from "styled-components";


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    width: 100%;

    @media screen and (min-width: 762px) {
        padding: 30px 100px;
    }
`
export const SecondContainer = styled.div`
display: none;
@media screen and (min-width: 762px) {
    display: flex;
    align-items: center;
    gap:15px;
}
`
export const InputContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    cursor: pointer;
    padding: 10px 20px;
    width: 450px;
    height: 49px;
    border-radius: 10px;
    border: 1px solid #808080;
    opacity: 0.75;
    background: ${(props) => props.theme.colors.white};
`

export const Input = styled.input`
    width: 328px;
    border: none;
    outline: none;
    color: #808080;
    font-size: 1rem;
    font-weight: 500;
`
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 30px;
    padding: 0px 30px;
    margin-bottom: 20px;
 @media screen and (min-width: 768px) {
    padding: 0px 100px;
    margin-bottom: 30px;
 }
`
export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap:30px
`
export const Text = styled.p`
   color: ${(props) => props.theme.colors.black};
   font-size: 1rem;
   font-weight: 400;
   span{
      font-weight: 500;
   }
`
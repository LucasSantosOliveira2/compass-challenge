import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.form`
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
   gap: 30px;
`
export const Text = styled.p`
   color: ${(props) => props.theme.colors.black};
   font-size: 1rem;
   font-weight: 400;
`

export const StyledLink = styled(Link)`
color: ${(props) => props.theme.colors.black};
   font-size: 1rem;
   font-weight: 500;
   text-decoration: none;
`
import React from "react";
import { Input } from "../../components/Input";
import { BoxTitle } from "../../components/BoxTitle";
import { Button } from "../../components/Button/styles";
import * as S from "./styles";

export const Register = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <BoxTitle title="Register" />
                <S.TextStyled>Please Fill out form to Register!</S.TextStyled>
            </S.Wrapper>
            <S.InputContainer>
                <Input
                    label="Full name"
                    type="text"
                    name="full"
                />
                <Input
                    label="Username"
                    type="text"
                    name="username"
                />
                <Input
                    label="E-mail"
                    type="email"
                    name="email"
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                />
                <Input
                    label="Password"
                    type="password"
                    name="confirm password"
                />

            </S.InputContainer>
            <Button type="submit" >
                Register
            </Button>
            <S.Text>
                Yes i have an account ? <S.StyledLink to="/login">Login</S.StyledLink>
            </S.Text>
        </S.Container>
    )
}
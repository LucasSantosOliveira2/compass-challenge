import { Input } from './../../components/Input';
import * as S from './styles';
import { BoxTitle } from './../../components/BoxTitle/';
import { Button } from './../../components/Button/styles';
import React from "react";

export const Login = () => {

    return (
        <S.Container>
            <BoxTitle title='Login' />
            <S.InputContainer>
                <Input label='Username' type='text' name='username' />
                <Input label='Password' type='Password' name='Password' />
            </S.InputContainer>
            <Button>Login</Button>
            <S.Text>Dont  have and account? <S.StyledLink to="/register">Register</S.StyledLink></S.Text>
        </S.Container>
    )
}
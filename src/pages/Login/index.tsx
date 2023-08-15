import React, { useState, useContext, ChangeEvent } from "react";
import * as S from "./styles";
import { BoxTitle } from "./../../components/BoxTitle/";
import { Button } from "./../../components/Button/styles";
import { Input } from "../../components/Input";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (username && password) {
            const isLogged = await auth.login(username, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Login failed.");
            }
        }
    }

    return (
        <S.Container>
            <BoxTitle title="Login" />
            <S.InputContainer>
                <Input
                    label="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleUsernameInput}
                    autoComplete="username"
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={handlePasswordInput}
                />
            </S.InputContainer>
            <Button type="submit" onClick={handleLogin}>
                Login
            </Button>

            <S.Text>
                Don't have an account? <S.StyledLink to="/register">Register</S.StyledLink>
            </S.Text>
        </S.Container>
    );
};

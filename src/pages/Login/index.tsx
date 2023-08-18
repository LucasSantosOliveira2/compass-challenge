import React, { useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { BoxTitle } from "./../../components/BoxTitle/";
import { Button } from "./../../components/Button/styles";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({
        username: "",
        password: ""
    });
    const [loginErrorMessage, setLoginErrorMessage] = useState('');

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        const newErrorMessages = {
            username: "",
            password: ""
        };

        if (!username) {
            newErrorMessages.username = "Please enter your username.";
        }
        if (!password) {
            newErrorMessages.password = "Please enter your password.";
        }

        setErrorMessages(newErrorMessages);
        if (newErrorMessages.username || newErrorMessages.password) {
            setErrorMessages(newErrorMessages);
            setLoginErrorMessage('');
            return;
        }

        const headers = {
            "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
            "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
            "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
        };

        const query = `
            mutation logIn($username: String!, $password: String!) {
                logIn(input: {
                    username: $username
                    password: $password
                }) {
                    viewer {
                        user {
                            id
                            createdAt
                            updatedAt
                            username
                        }
                        sessionToken
                    }
                }
            }
        `;

        const variables = {
            username: username,
            password: password,
        };

        try {
            const response = await axios.post(
                "https://parseapi.back4app.com/graphql",
                { query, variables },
                { headers }
            );

            if (response.data?.data?.logIn?.viewer?.sessionToken) {
                navigate("/");
            }
            else {
                setLoginErrorMessage('Incorrect username or password.');
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.Container>
            <BoxTitle title="Login" />
            <S.InputContainer>
                <S.MessageContainer>
                    <Input
                        label="Username"
                        type="text"
                        name="username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setErrorMessages(prevErrors => ({ ...prevErrors, username: "" }));
                        }}
                    />
                    <S.ErrorMessage>{errorMessages.username}</S.ErrorMessage>
                </S.MessageContainer>
                <S.MessageContainer>
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrorMessages(prevErrors => ({ ...prevErrors, password: "" }));
                            setLoginErrorMessage('');
                        }}
                    />
                    <S.ErrorMessage>{errorMessages.password}</S.ErrorMessage>
                    <S.ErrorMessage>{loginErrorMessage}</S.ErrorMessage>
                </S.MessageContainer>
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

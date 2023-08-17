import React, { useState, ChangeEvent } from "react";
import * as S from "./styles";
import axios from "axios";
import { BoxTitle } from "./../../components/BoxTitle/";
import { Button } from "./../../components/Button/styles";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
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
                toast.success('Login successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else if (!username || !password) {
                toast.error('Please fill in all fields', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                toast.error('Incorrect username or password', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.Container>
            <ToastContainer />
            <BoxTitle title="Login" />
            <S.InputContainer>
                <Input
                    label="Username"
                    type="text"
                    name="username"
                    autoComplete="username"
                    value={username}
                    onChange={handleUsernameInput}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
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

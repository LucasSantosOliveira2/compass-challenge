import React, { useState } from "react";
import { Input } from "../../components/Input";
import { BoxTitle } from "../../components/BoxTitle";
import { Button } from "../../components/Button/styles";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Register = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();



    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {

        const checkEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
        const checkPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");
        const checkUsername = new RegExp("[a-zA-Z0-9]{4,16}$");

        e.preventDefault();

        const newErrorMessages = {
            fullName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        };

        if (!fullName) {
            newErrorMessages.fullName = "Please enter your full name.";
        }
        if (!username) {
            newErrorMessages.username = "Please enter a username.";
        } else if (!checkUsername.test(username)) {
            newErrorMessages.username = "Username format is invalid.";
        }
        if (!email) {
            newErrorMessages.email = "Please enter your email.";
        } else if (!checkEmail.test(email)) {
            newErrorMessages.email = "Email format is invalid.";
        }
        if (!password) {
            newErrorMessages.password = "Please enter a password.";
        } else if (!checkPassword.test(password)) {
            newErrorMessages.password = "Password format is invalid.";
        }
        if (!confirmPassword) {
            newErrorMessages.confirmPassword = "Please confirm your password.";
        } else if (password !== confirmPassword) {
            newErrorMessages.confirmPassword = "Passwords do not match.";
        }

        if (Object.values(newErrorMessages).some(msg => msg !== "")) {
            setErrorMessages(newErrorMessages);
            return;
        }

        const headers = {
            "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
            "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
            "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
        };

        const query = `
        mutation SignUp($fullname: String!, $username: String!, $password: String!) {
            signUp(input: {
                fields: {
                    fullname: $fullname
                    username: $username
                    password: $password
                }
            }) {
                viewer {
                    user {
                        id
                        createdAt
                    }
                    sessionToken
                }
            }
        }
    `;
        const variables = {
            fullname: fullName,
            username: username,
            password: password,
        };

        try {
            const response = await axios.post(
                "https://parseapi.back4app.com/graphql",
                { query, variables },
                { headers: headers }
            );

            console.log(response.data);
            if (response.data?.data?.signUp?.viewer?.sessionToken) {
                navigate("/login");
            }
            else {
                alert("User already exists")
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <S.Container>
            <S.Wrapper>
                <BoxTitle title="Register" />
                <S.TextStyled>Please Fill out form to Register!</S.TextStyled>
            </S.Wrapper>
            <S.InputContainer>
                <S.MessageContainer>
                    <Input
                        label="Full name"
                        type="text"
                        name="fullname"
                        value={fullName}
                        autoComplete="fullname"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <S.ErrorMessage>{errorMessages.fullName}</S.ErrorMessage>
                </S.MessageContainer>
                <S.MessageContainer>
                    <Input
                        label="Username"
                        type="text"
                        name="username"
                        value={username}
                        autoComplete="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <S.ErrorMessage>{errorMessages.username}</S.ErrorMessage>
                </S.MessageContainer>
                <S.MessageContainer>
                    <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        value={email}
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.ErrorMessage>{errorMessages.email}</S.ErrorMessage>
                </S.MessageContainer>
                <S.MessageContainer>
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        autoComplete="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <S.ErrorMessage>{errorMessages.password}</S.ErrorMessage>
                </S.MessageContainer>
                <S.MessageContainer>
                    <Input
                        label="Confirm Password"
                        type="password"
                        name="confirm password"
                        value={confirmPassword}
                        autoComplete="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <S.ErrorMessage>{errorMessages.confirmPassword}</S.ErrorMessage>
                </S.MessageContainer>
            </S.InputContainer>

            <Button type="submit" onClick={handleRegister}>
                Register
            </Button>
            <S.Text>
                Already have an account? <S.StyledLink to="/login">Login</S.StyledLink>
            </S.Text>
        </S.Container >
    )
}

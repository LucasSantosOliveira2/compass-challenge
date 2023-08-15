import React, { createContext, useState, useEffect } from "react";
import axios from "axios"; // Import the axios library
import { User } from "../types/user";

type AuthContextType = {
    user: User | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                try {
                    const response = await axios.get("https://parseapi.back4app.com/login", {
                        headers: {
                            "Authorization": `Bearer ${storageData}`,
                        },
                    });

                    const data = response.data;

                    if (data.user) {
                        setUser(data.user);
                    }
                } catch (error) {
                    console.error("Token validation error:", error);
                }
            }
        }

        validateToken();
    }, []);


    const login = async (username: string, password: string) => {
        try {
            const response = await axios.get("https://parseapi.back4app.com/login", {
                headers: {
                    "X-Parse-Application-Id": "lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh",
                    "X-Parse-REST-API-Key": "8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08",
                    "X-Parse-Revocable-Session": "1",
                },
                params: {
                    username,
                    password,
                },
            });

            const data = response.data;

            console.log(data); // Verifique a estrutura dos dados

            if (data.username && data.sessionToken) {
                setUser(data);
                setToken(data.sessionToken);
                return true;
            }

            return false;
        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    }


    const logout = async () => {
        console.log("logout");
        setUser(null);
        setToken('');
        //await api.logout();
    }

    const setToken = (sessionToken: string) => {
        localStorage.setItem('authToken', sessionToken);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

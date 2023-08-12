import React from "react";

type Color = {
    primary: string;
    white: string;
    black: string;
    background: string;
    text: string;
    cardBackground: string;
};



type ThemeColors = {
    colors: Color;
};

const theme: ThemeColors = {
    colors: {
        primary: '#808080',
        white: '#FFFFFF',
        black: '#000',
        background: '#FC8019',
        cardBackground: '#F8F8F8',
        text: '#202020',
    },
};

export default theme;

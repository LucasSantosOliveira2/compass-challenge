type Color = {
    primary: string;
    white: string;
    black: string;
    background: string;
    text: string;
};



type ThemeColors = {
    colors: Color;
};

const theme: ThemeColors = {
    colors: {
        primary: '#808080',
        white: '#FFFFFF',
        black: '#E0E0E0',
        background: '#FC8019',
        text: '#202020',
    },
};

export default theme;

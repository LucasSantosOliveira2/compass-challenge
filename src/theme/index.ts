type Color = {
    white: string;
    black: string;
    background: string | string[];
    text: string;
    button: string | string[];
};



type ThemeColors = {
    colors: Color;
};

const theme: ThemeColors = {
    colors: {
        white: '#FFFFFF',
        black: '#E0E0E0',
        background: 'linear-gradient(180deg, #33383D 0%, #1C1D20 100%)',
        text: 'E0E0E0',
        button: 'linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%)'
    },
};

export default theme;

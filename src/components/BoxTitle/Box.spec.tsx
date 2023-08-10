import { render, screen } from "@testing-library/react";
import { BoxTitle } from ".";
import React from "react";
import { ThemeProvider } from "styled-components"; // Importe o ThemeProvider
import theme from "../../theme";
describe('<BoxTitle/>', () => {
    it('should display elements', () => {
        render(
            <ThemeProvider theme={theme}>
                <BoxTitle />
            </ThemeProvider>
        );
        screen.debug();
    });
});

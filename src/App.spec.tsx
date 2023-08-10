import App from "./App";
import { render, screen } from "@testing-library/react";
import React from "react";
describe('Jest', () => {
    it('should work', () => {
        expect(1).toBe(1)
    })
    it('should display elements', () => {
        render(<App />)
        screen.debug()
    });
})
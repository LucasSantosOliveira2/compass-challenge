import { render, screen } from "@testing-library/react";
import { Header } from ".";
describe('<Header/>', () => {
    it('should display elements', () => {
        render(<Header />)
        screen.debug()
    });
})
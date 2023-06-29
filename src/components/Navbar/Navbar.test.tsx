import React from "react";
import { render, screen } from "../../test/test-utils";
import { Navbar } from "./Navbar";

describe('Navbar', () => {

    test('Render Navbar compoenent', async () => {
        render(<Navbar name="John Smith"/>)

        expect(screen.getByText(/bullsfirst/i)).toBeInTheDocument();
        expect(screen.getByText(/John Smith/i)).toBeInTheDocument();

        // const displayedImage = screen.getByRole('img');
        // expect(displayedImage).toBeInTheDocument();
    })
})
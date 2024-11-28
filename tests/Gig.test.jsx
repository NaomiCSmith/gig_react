// file: Gig.test.jsx

import { render, screen } from "@testing-library/react";
import Gig from "src/components/Gig.jsx";

test("renders band name", () => {
    render(<Gig
        bandname="Imagine Dragons"
        />);
    expect(screen.getByRole("heading")).toHaveTextContent("Imagine Dragons");
});

test("renders location of gig", () => {
    render(<Gig 
        location="The Underworld"
        />);
    expect(screen.getByRole("location")).toHaveTextContent("The Underworld");
});

test("renders date and time of gig", () => {
    render(<Gig 
        datetime="12pm on 02/05/2025"
        />);
    expect(screen.getByRole("datetime")).toHaveTextContent("12pm on 02/05/2025");
});

test("renders description of gig", () => {
    render(<Gig 
        description="A hoot of a time"
        />);
    expect(screen.getByRole("decription")).toHaveTextContent("A hoot of a time");
});

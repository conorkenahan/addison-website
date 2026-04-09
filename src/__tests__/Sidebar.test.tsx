import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "../app/components/Sidebar";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({ href, children, onClick }: any) {
    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  };
});

const mockShows = [
  { _id: "show-1", title: "D.D.D.D 2026, New York, NY" },
  { _id: "show-2", title: "Group Show 2025, LA" },
];

describe("Sidebar", () => {
  it("renders Addison Bale as the home link", () => {
    render(<Sidebar shows={[]} />);
    expect(screen.getAllByText("Addison Bale").length).toBeGreaterThan(0);
  });

  it("renders Works, Writing and CV nav items", () => {
    render(<Sidebar shows={[]} />);
    expect(screen.getAllByText("Works").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Writing").length).toBeGreaterThan(0);
    expect(screen.getAllByText("CV").length).toBeGreaterThan(0);
  });

  it("does not show show titles when Works is collapsed", () => {
    render(<Sidebar shows={mockShows} />);
    expect(screen.queryByText("D.D.D.D 2026, New York, NY")).not.toBeInTheDocument();
  });

  it("shows show titles after clicking Works", () => {
    render(<Sidebar shows={mockShows} />);
    fireEvent.click(screen.getAllByText("Works")[0]);
    expect(screen.getByText("D.D.D.D 2026, New York, NY")).toBeInTheDocument();
    expect(screen.getByText("Group Show 2025, LA")).toBeInTheDocument();
  });

  it("collapses show list after clicking Works twice", () => {
    render(<Sidebar shows={mockShows} />);
    fireEvent.click(screen.getAllByText("Works")[0]);
    fireEvent.click(screen.getAllByText("Works")[0]);
    expect(screen.queryByText("D.D.D.D 2026, New York, NY")).not.toBeInTheDocument();
  });

  it("links each show to /works/[id]", () => {
    render(<Sidebar shows={mockShows} />);
    fireEvent.click(screen.getAllByText("Works")[0]);
    const link = screen.getByText("D.D.D.D 2026, New York, NY").closest("a");
    expect(link).toHaveAttribute("href", "/works/show-1");
  });

  it("renders mobile Menu toggle", () => {
    render(<Sidebar shows={[]} />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("toggles mobile menu open and closed", () => {
    render(<Sidebar shows={[]} />);
    const menuToggle = screen.getByText("Menu");
    fireEvent.click(menuToggle);
    expect(screen.getByText("Close")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Close"));
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });
});

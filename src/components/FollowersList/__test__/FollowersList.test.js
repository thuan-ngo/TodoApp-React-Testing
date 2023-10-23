import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import FollowersList from "../FollowersList";

jest.mock("axios");

describe("FollowersList", () => {
  it("fetches and displays followers", async () => {
    const followers = [
      {
        name: { first: "John", last: "Doe" },
        picture: { large: "https://randomuser.me/api/portraits/men/75.jpg" },
        login: { username: "johndoe" },
      },
    ];
    axios.get.mockResolvedValue({ data: { results: followers } });

    render(
      <Router>
        <FollowersList />
      </Router>
    );

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Doe")).toBeInTheDocument());
    await waitFor(() =>
      expect(screen.getByText("johndoe")).toBeInTheDocument()
    );
  });
});

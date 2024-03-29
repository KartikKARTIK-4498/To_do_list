import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import Home from "../../pages";

describe("Home", () => {
  test("successfully rendered Home page", async() => {
    const renderedHome = render(<Home />);
    await waitFor(() => expect(renderedHome).not.toBeNull())
  });
});

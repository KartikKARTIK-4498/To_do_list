import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import SideBar from "../../../components/layout/SideBar";
import * as NextRouter from "next/router";

describe("SideBar", () => {
  const useRouter = jest.spyOn(NextRouter, "useRouter");
  test("successfully rendered Home page - all tasks", async () => {
    const router = {
      pathname: "/",
      prefetch: jest.fn(() => Promise.resolve()),
    };
    useRouter.mockImplementation(() => router);
    const testSideBar = render(<SideBar onClickHandler={jest.fn()} />);

    await waitFor(() => expect(testSideBar).not.toBeNull());
    const textContent = testSideBar.findByText("TO-DO-LIST");

    expect(textContent).toBeTruthy();
  });

  test("successfully rendered Home page - pending tasks", async () => {
    const router = {
      pathname: "/pending",
      prefetch: jest.fn(() => Promise.resolve()),
    };
    useRouter.mockImplementation(() => router);
    const testSideBar = render(<SideBar onClickHandler={jest.fn()} />);

    await waitFor(() => expect(testSideBar).not.toBeNull());
    const textContent = testSideBar.findByText("PENDING LIST");

    expect(textContent).toBeTruthy();
  });
});

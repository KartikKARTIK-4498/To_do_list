import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import NewTodo from "../../../components/todo/NewTodo";

describe("NewTodo", () => {
  test("successfully rendered NewTodo component", async () => {
    const testNewTodo = render(
      <NewTodo
        todo={""}
        todoDescription={""}
        setTodo={jest.fn()}
        settodoDescription={jest.fn()}
        onSubmit={jest.fn()}
      />
    );
    await waitFor(() => expect(testNewTodo).not.toBeNull());
    const textbox = testNewTodo.getByPlaceholderText("Add a task");
    const textarea = testNewTodo.getByPlaceholderText("Description");
    const addBtn = testNewTodo.getByText('Add')
    expect(textbox).toBeTruthy();
    expect(textarea).toBeTruthy();
    expect(addBtn).toBeTruthy();
  });
});

import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import TodoList from "../../../components/todo/TodoList";

describe("TodoList", () => {
  test("successfully rendered TodoList component - No todo item", async () => {
    const testTodoList = render(
      <TodoList
        todos={[]}
        todoDescription={""}
        setTodo={jest.fn()}
        settodoDescription={jest.fn()}
      />
    );
    await waitFor(() => expect(testTodoList).not.toBeNull());
    const description = testTodoList.getByText('No tasks yet. Click on the input to add a new task')
    expect(description).toBeTruthy();
  });

  test("successfully rendered TodoList component - with few todo items", async () => {
    const testTodoList = render(
      <TodoList
        todos={[
            {
                _id:'1',
                content: 'LEARN NEXT JS',
                description: 'LEARN NEXT JS description',
                important: false,
                task_done: false
            },
        ]}
        todoDescription={""}
        setTodo={jest.fn()}
        settodoDescription={jest.fn()}
      />
    );
    await waitFor(() => expect(testTodoList).not.toBeNull());
    expect(() => screen.getByText('No tasks yet. Click on the input to add a new task')).toThrow();
    const todoitem1 = testTodoList.getAllByText('LEARN NEXT JS')
    expect(todoitem1).toBeTruthy();
  });
});
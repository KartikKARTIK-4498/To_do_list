import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodo,todoDescription, settodoDescription }) {
    if (!todos || todos.length <= 0) {
        return (
            <section>
                <p style={{ marginLeft: '1.75em' }}>
                    No tasks yet. Click on the input to add a new task
                </p>
            </section>
        );
    }
    return (
        <section style={{marginTop:"2rem"}}>
            {todos.map(todo => (
                <TodoItem {...todo} key={todo._id} setTodo={setTodo}todoDescription={todoDescription} settodoDescription={settodoDescription} />
            ))}
        </section>
    );
}

export default TodoList;

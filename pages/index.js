import { useState } from 'react';
import connectDb from '../lib/connectDb';
import Todo from '../models/Todo';
import NewTodo from '../components/todo/NewTodo';
import TodoList from '../components/todo/TodoList';
import axios from 'axios';
import Head from 'next/head';

function Home({ todos }) {
    const [tasks, setTasks] = useState(todos);
    const [todo, setTodo] = useState('');
    const [todoDescription, settodoDescription] = useState('');

    const onSubmitHandler = async todo => {
        try {
            console.log(todo);
            const response = await axios({
                method: 'POST',
                url: '/api/new',
                data: { content: todo, description:todoDescription },
            });
            setTasks(prev => [
                ...prev,
                {
                    ...response.data.todo,
                    _id: response.data.todo._id.toString(),
                },
            ]);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <Head>
                <title>Todos || Home</title>
                <meta name='description' content='Todos || Manage your tasks easily' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <NewTodo onSubmit={onSubmitHandler} todo={todo} setTodo={setTodo} 
            todoDescription={todoDescription} settodoDescription={settodoDescription}
            />
            <TodoList 
            todos={tasks} setTodo={setTodo} 
            todoDescription={todoDescription} settodoDescription={settodoDescription}
            />
        </>
    );
}

export async function getServerSideProps() {
    await connectDb();
    const todos = await Todo.find({});
    return {
        props: {
            todos: todos.map(todo => ({
                _id: todo._id.toString(),
                content: todo.content,
                description: todo.description,
                important: todo.important,
                task_done: todo.task_done,
            })),
        },
    };
}

export default Home;

import { todos } from "./todos";

export const resolvers = {
    Query: {
        getTodos: () => {
            return todos;
        },
        getTodoById: (_: any, { id }: { id: string }) => {
            return todos.find((todo) => todo.id === id);
        },
    },
    Mutation: {
        createTodo: (_: any, { title, description }: { title: string; description: string }) => {
            const id = String(todos.length + 1);
            const newTodo = { id, title, description, completed: false };
            todos.push(newTodo);
            return newTodo;

        },
        updateTodo: (
            _: any,
            { id, title, description, completed }: { id: string; title?: string; description?: string; completed?: boolean }
        ) => {
            const todo = todos.find((todo) => todo.id === id);
            if (!todo) {
                throw new Error('Todo not found');
            }
            if (title) {
                todo.title = title;
            }
            if (description) {
                todo.description = description;
            }
            if (completed !== undefined) {
                todo.completed = completed;
            }
            return todo;
        },
        deleteTodo: (_: any, { id }: { id: string }) => {
            const index = todos.findIndex((todo) => todo.id === id);
            if (index === -1) {
                throw new Error('Todo not found');
            }
            const deletedTodo = todos.splice(index, 1)[0];
            return deletedTodo;
        },
    },
};
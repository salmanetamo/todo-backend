export type Todo = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
};

export const todos: Todo[] = [
    { id: '1', title: 'Learn GraphQL', description: 'Study GraphQL basics', completed: false },
    { id: '2', title: 'Implement TODO app', description: 'Build a TODO application', completed: false },
];
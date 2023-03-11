import { v4 as uuid } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(localStorage.getItem('todos')) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem('todos', JSON.stringify(value));
	}
});

export const addTodo = () => {
	todos.update((currrentTodos) => [...currrentTodos, { id: uuid(), text: '', completed: false }]);
};

export const removeTodo = (id) => {
	todos.update((currrentTodos) => currrentTodos.filter((todo) => todo.id !== id));
};

export const toggleTodo = (id) => {
	todos.update((currrentTodos) =>
		currrentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		})
	);
};

export const editTodo = (id, text) => {
	todos.update((currrentTodos) =>
		currrentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		})
	);
};

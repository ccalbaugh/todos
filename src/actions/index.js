import { v4 } from 'node-uuid';

export receiveTodos = (filter, response) => ({
	type: 'RECIEVE_TODOS',
	filter,
	response,
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

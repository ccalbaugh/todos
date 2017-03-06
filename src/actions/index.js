import { v4 } from 'node-uuid';
import { getIsFetching } from '../reducers':
import * as api from '../api';

export requestTodos = (filter) => ({
	type: 'REQUEST_TODOS',
	filter,
});

const receiveTodos = (filter, response) => ({
	type: 'RECIEVE_TODOS',
	filter,
	response,
});

export const fetchTodos = (filter) => (dispatch, getState) => {
	// Now this func is conditionally calling the funcs that use network operations
	// only if one isn't already being requested
	if (getIsFetching(getState(), filter)) {
		return;
	}

	dispatch(requestTodos(filter));

	return api.fetchTodos(filter).then(response => {
		dispatch(receiveTodos(filter, response));
	});
};


export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

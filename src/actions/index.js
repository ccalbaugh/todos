import { v4 } from 'node-uuid';
import { getIsFetching } from '../reducers';
import * as api from '../api';

export const fetchTodos = (filter) => (dispatch, getState) => {
	// Now this func is conditionally calling the funcs that use network operations
	// only if one isn't already being requested
	if (getIsFetching(getState(), filter)) {
		// This func normally returns a promise so let's be consistent
		return Promise.resolve();
	}

	dispatch({
		type: 'FETCH_TODOS_REQUEST',
		filter,
	});

	return api.fetchTodos(filter).then(
		response => {
			dispatch({
				type: 'FETCH_TODOS_SUCCESS',
				filter,
				response,
			});
		},
		error => {
			dispatch({
				type: 'FETCH_TODOS_FAILURE',
				filter,
				message: error.message || 'Something went wrong.'
			});
		}
	);
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

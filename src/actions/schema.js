import { Schema, arrayOf } from 'normalizr';
// todos is the dictionary name in the normalized response
export const todo = new Schema('todos');
// corresponds to the responses that contain arrays of todo objs
export const arrayOfTodos = arrayOf(todo);
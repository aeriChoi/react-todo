import { createAction } from 'redux-actions';
import { ADD_TODO } from './actionTypes';

export const handleAddTodos = createAction(ADD_TODO, (item, type = 'add') => type)();
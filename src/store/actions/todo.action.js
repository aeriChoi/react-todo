import { createAction } from 'redux-actions';

/** Action Types */
// todo 등록
export const ADD_TODO = "ADD_TODO";

export const handleAddTodos = createAction(ADD_TODO, (todos, type = 'add') => ({ todos, type }))();
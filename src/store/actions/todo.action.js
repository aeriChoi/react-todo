import { createAction } from 'redux-actions';

/** Action Types */
// todo 등록
export const ADD_TODO = "ADD_TODO";

export const addTodos = createAction(ADD_TODO, (data) => data)();
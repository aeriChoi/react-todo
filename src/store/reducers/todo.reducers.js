import {createReducer} from 'typesafe-actions';
import produce from 'immer';
import * as actions from '../actions/todo.action';

export const initialState = {
  todos: [],
  type: '',
};

export const todos = createReducer(initialState)
  .handleAction(actions.ADD_TODO, (state, action) =>
    produce(state, (draft) => {
      const {todos, type} = action.payload;
      draft.todos = todos;
      draft.type = type;
    })
  );
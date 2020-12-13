import {createReducer} from 'typesafe-actions';
import * as actions from '../actions/todo.action';

export const initialState = {
  todos: [],
  type: '',
};

export const todos = createReducer(initialState)
  .handleAction(actions.ADD_TODO, (state, action) =>
    produce(state, (draft) => {
      const {item, type} = action.payload;
      draft.todos = item;
      draft.type = type;
    })
  );
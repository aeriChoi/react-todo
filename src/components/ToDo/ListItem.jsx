import React, { memo } from 'react';
import { connect } from 'react-redux';
import {removeTodo} from '../../store/todos/todosSlice';
import {ListsItem, ItemTextBox} from '../../commonness';

const ListItem = memo(({data, removeToDo}) => {

  const onRemove = () => {
    removeToDo(data);
  };

  return (
    <ListsItem className={`${data.rank}`}>
      <ItemTextBox className="title">{data.title}</ItemTextBox>
      <ItemTextBox className="des">{data.description}</ItemTextBox>
      <ItemTextBox className="deadline">{data.date}</ItemTextBox>
      <button onClick={onRemove}>삭제</button>
    </ListsItem>
  );
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeToDo: item => dispatch(removeTodo(item))
  }
};

export default connect(null, mapDispatchToProps)(ListItem);
import React, { memo } from 'react';
import { connect } from 'react-redux';
import {removeTodo} from '../../store/todos/todosSlice';
import {ListsItem, ItemTextBox} from '../../commonness';

const ListItem = memo(({data, removeToDo, onRemove}) => {

  const onRemoveClick = (e) => {
    e.preventDefault();
    const removeValue = {
      id: e.target.value,
    };
    removeToDo(removeValue);
    onRemove(true, removeValue);
  };

  return (
    <ListsItem className={`${data.rank}`}>
      <ItemTextBox className="title">{data.title}</ItemTextBox>
      <ItemTextBox className="des">{data.description}</ItemTextBox>
      <ItemTextBox className="deadline">마감: {data.date}</ItemTextBox>
      <button type="button" className="btn-remove" value={data.id} onClick={onRemoveClick}>삭제</button>
    </ListsItem>
  );
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeToDo: item => dispatch(removeTodo(item))
  }
};

export default connect(null, mapDispatchToProps)(ListItem);
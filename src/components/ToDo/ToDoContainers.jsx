import React, { memo, useEffect, useState } from 'react';
import Forms from './Form';
import ListItem from './ListItem';
import {FormWrapper, ListWrapper, Title} from '../../commonness';
import {connect} from "react-redux";

const ToDoContainers = memo(({toDos}) => {
  const [state, setState] = useState({
    loaded: false,
    toDos: toDos,
  });

  const onChange = (value)=> {
    if (value) {
      setState({
        loaded: true,
        toDos: JSON.parse(localStorage.getItem('todos')),
      })
    }
  };

  useEffect(() => {
    setState({
      loaded: true,
      toDos: JSON.parse(localStorage.getItem('todos')) || [],
    })
  }, [state.loaded]);

  return (
    <>
      <Title>
        <h1>TO-DO</h1>
      </Title>
      <FormWrapper>
        <Forms onChange={onChange}/>
      </FormWrapper>
      <ListWrapper>
        {state.toDos && state.toDos.length > 0 && state.toDos.map(toDo => {
          return (
            <ListItem key={toDo.id} data={toDo} />
          )
        })}
      </ListWrapper>
    </>
  );
});

const mapStateToProps = (state) => {
  return { toDos: state };
}

export default connect(mapStateToProps, null)(ToDoContainers);
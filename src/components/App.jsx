import React, {memo} from 'react';
import ToDoContainers from './ToDo/ToDoContainers';
import {StyledLayout} from '../commonness';

export const App = memo(() => {

  return (
    <StyledLayout>
      <ToDoContainers/>
    </StyledLayout>
  );
});

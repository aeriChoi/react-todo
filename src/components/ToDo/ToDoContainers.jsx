import React, { memo } from 'react';
import styled from 'styled-components';
import {Forms} from './Form';
import {FormWrapper, ListWrapper} from '../../commonness';

const Title = styled.header`
  h1 {
    margin-bottom: 20px;
    color: #000;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    line-height: 36px;
  }
`;

export const ToDoContainers = memo(() => {

  return (
    <>
      <Title>
        <h1>TO-DO</h1>
      </Title>
      <FormWrapper>
        <Forms/>
      </FormWrapper>
      <ListWrapper>
        list
      </ListWrapper>
    </>
  );
});
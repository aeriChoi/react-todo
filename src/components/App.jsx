import React, { memo } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  max-width: 500px;
  min-width: 280px;
  margin: 0 auto;
  padding: 20px 16px;
`;

export const App = memo(() => {

  return (
    <LayoutWrapper className="App">
      하이
    </LayoutWrapper>
  );
});

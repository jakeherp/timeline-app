import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #efefef;
  border-bottom: 2px solid #eee;
  text-align: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Twitter Timeline</h1>
    </StyledHeader>
  );
};

export default Header;

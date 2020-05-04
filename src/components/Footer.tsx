import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Built by <a href="https://herper.io/">Jacob Herper</a>
    </StyledFooter>
  );
};

export default Footer;

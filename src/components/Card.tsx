import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { IPost } from '../interfaces/post';

const StyledCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 1rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  margin: 1rem;
  padding: 1rem;

  @media screen and (min-width: 1160px) {
    grid-template-columns: 1fr 9fr;
  }
`;

const Image = styled.figure`
  margin: 0;

  img {
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const Content = styled.main`
  h2 {
    font-size: 1.25rem;
    color: #333;
    margin: 0;
  }

  p {
    padding: 1rem;
    background: #efefef;
    border: 1px solid #eee;
    border-radius: 3px;
  }
`;

const Card = ({ image, text, timeStamp, username }: IPost) => {
  const date = moment(timeStamp).fromNow();

  return (
    <StyledCard>
      <Image>
        <img src={image} alt={username} />
      </Image>
      <Content>
        <h2>{username}</h2>
        <p>{text}</p>
        <em>{date}</em>
      </Content>
    </StyledCard>
  );
};

export default Card;

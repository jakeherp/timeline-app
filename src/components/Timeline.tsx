import React, { useEffect, useState } from 'react';
import Card from './Card';

import { useFetch, useInterval } from '../utils';

import { IPost } from '../interfaces/post';

const Timeline = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const { response, loading, error } = useFetch(
    'https://magiclab-twitter-interview.herokuapp.com/jacob-herper/api?count=100'
  );

  useEffect(() => {
    if (response === null) return;
    setPosts(response);
  }, [response]);

  return (
    <div>
      {error && <p>Something went wrong...</p>}
      {posts.length > 0
        ? posts.map(({ id, image, text, timeStamp, username }: IPost) => (
            <Card
              key={id}
              id={id}
              image={image}
              text={text}
              timeStamp={timeStamp}
              username={username}
            />
          ))
        : loading && <p>Loading...</p>}
    </div>
  );
};

export default Timeline;

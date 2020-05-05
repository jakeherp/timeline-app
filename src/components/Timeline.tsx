import React, { useEffect, useState } from 'react';
import Request from 'axios-request-handler';
import unionBy from 'lodash.unionby';
import Card from './Card';

import { IPost } from '../interfaces/post';

const Timeline = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const postsRequest = new Request(
      'https://magiclab-twitter-interview.herokuapp.com/jacob-herper/api'
    );

    postsRequest.poll(5000).get()
      .then(({ data }: any) => {
        const mergedArrays = [
          ...posts,
          ...data,
        ]

        const uniquePosts = unionBy(mergedArrays, 'id').sort(function (a, b) { return b.id - a.id });

        setPosts(uniquePosts);
      })
      .catch((err: string) => {
        console.error('Something went wrong!', err);
      });
  }, [posts])

  console.log(posts);

  return (
    <div>
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
        : <p>Loading...</p>}
    </div>
  );
};

export default Timeline;

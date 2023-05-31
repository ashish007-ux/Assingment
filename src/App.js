import React, { useEffect, useState } from 'react';

const Table = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
        {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import { useState } from "react";
import axios from "axios";

import "./user.css";

const User = (props) => {
  const [posts, setPosts] = useState([]);

  const handlePosts = () => {
    const getData = async () => {
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(posts.data.filter((post) => post.userId == props.user.id));
    };
    getData();
    props.handleChangeActiveID(props.user.id);
  };

  return (
    <div className="user" key={props.user.id}>
      <h4>
        Name: {props.user.name} {props.user.username}
      </h4>
      <p>Email: {props.user.email}</p>
      <p>
        City: {props.user.address.city}
        <br />
        Street: {props.user.address.street}
      </p>
      <button onClick={handlePosts}>Posts detail</button>
      {props.activeId == props.user.id && (
        <div className="post">
          <h5>Posts number: {posts.length}</h5>
          {posts.map(post => 
            (<div key={post.id}>
              <h6>{post.id}</h6>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>)
          )}
        </div>
      )}
    </div>
  );
};

export default User;

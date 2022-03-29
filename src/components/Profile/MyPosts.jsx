import React from "react";
import Post from "./Post";
import s from "./Profile.module.css";

const MyPosts = (props) => {
  let newPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onChangePost = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  };

  let posts = props.postData.map((elem) => (
    <Post message={elem.message} likesCount={elem.likesCount} />
  ));
  return (
    <div className="my-post">
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onChangePost}
            ref={newPost}
            cols="20"
            rows="5"
            value={props.newPostText}
          />
        </div>
        <button onClick={onAddPost}>Add Post</button>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;

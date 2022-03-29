import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fVEFrvrKufD8YYWbKWxFUc3G7mmNEimreQ&usqp=CAU"
        alt=""
      />
      {props.message}
      <div>
        <span>{props.likesCount}like</span>
      </div>
    </div>
  );
};

export default Post;

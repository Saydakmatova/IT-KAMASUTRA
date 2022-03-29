import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onChangePost = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onChangePost}
//       addPost={addPost}
//       postData={state.profilePage.postData}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

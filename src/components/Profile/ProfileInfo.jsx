import React from "react";
import Preloader from "../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        src="https://klike.net/uploads/posts/2021-04/1618815701_51.jpg"
        alt=""
      />
      <div className="description">
        <img src={props.profile.photos.large} alt="" />
        <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;

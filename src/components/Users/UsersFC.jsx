import axios from "axios";
import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUser(response.data.items);
        });
    }
  };
  return (
    <div>
      <button onClick={getUsers}>getUser</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={
                  u.photos.small != null
                    ? u.photos.small
                    : "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"
                }
                alt="..."
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.region"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

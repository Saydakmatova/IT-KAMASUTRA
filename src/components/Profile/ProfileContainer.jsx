import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // const userId = this.props.match.params.userId;
    // if (!userId) {
    //   userId = 2
    // }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <div className="profile">
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

// let WithUrlDataContainerData = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);

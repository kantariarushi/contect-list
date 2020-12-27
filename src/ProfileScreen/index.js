import React from 'react';
import { connect } from "react-redux";

const ProfileScreen = (props) => {
    console.log("props --->", props.match.params.id);
    console.log("profile ---->", props.profile?.data?.id)
  return props.match.params.id && props.profile?.data?.id ? <a>Hello, I am your cat!</a> : null;
};

const mapStateToProps = (state) => ({
    profile: state.cartReducer.profile,
});

export default connect(
 mapStateToProps,
)(ProfileScreen);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchProfile} from "../actions/homeAction";

const profile = (props) => {

const profileContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContaint: 'center',
  backgroundColor: 'white',
  width: '80%',
  padding: 20,
  textDecoration: 'none',
  marginTop: 20
}
const imageStyle = {
    height: 50,
    width: 50,
    borderRadius: 25
}

const selectProfile = async(id) => {
        await props.fetchProfile(id)
}

    const {id, email, firstName, lastName, profileImage} = props

  return (
        <Link to={`/ProfileScreen/${id}`} style={profileContainer} onClick={() => selectProfile(id)}>
            <img src={profileImage} style={imageStyle} alt="Logo" />
            <div style={{flexDirection: 'column', display: 'flex', marginLeft: 20}}>
                <h1 style={{alignSelf: 'flex-start', marginTop: -10, color: 'black'}}>{firstName + lastName}</h1>
                <a style={{marginTop: -20, color: 'black'}}>{email}</a>
            </div>
        </Link>
    );
};

const mapStateToProps = (state) => ({
    profile: state.cartReducer.profile,
});

function mapDispatchToProps(dispatch) {
 return {
   ...bindActionCreators(
     {
        fetchProfile
     },
     dispatch
   ),
 };
}

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(profile);
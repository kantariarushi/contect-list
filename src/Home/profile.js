import React from 'react';

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

    const {id, email, firstName, lastName, profile} = props

  return (
        <a href="#" style={profileContainer} onClick={() => console.log(id)}>
            <img src={profile} style={imageStyle} alt="Logo" />
            <div style={{flexDirection: 'column', display: 'flex', marginLeft: 20}}>
                <h1 style={{alignSelf: 'flex-start', marginTop: -10, color: 'black'}}>{firstName + lastName}</h1>
                <a style={{marginTop: -20, color: 'black'}}>{email}</a>
            </div>
        </a>
    );
};

export default profile;
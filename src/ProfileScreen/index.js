import React from 'react';
import { connect } from "react-redux";
import pic from "../assets/image/1.jpg";
import email from "../assets/image/email.png";
import location from "../assets/image/pin.png"

const ProfileScreen = (props) => {

    const mainContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",      
    }

    const profileContainer = {
        display: 'flex',
        alignItems: 'center',
        width: "25%",
        height: "60%",
        flexDirection: 'column',
        borderLeft: "1.5px solid rgb(212, 212, 212)",
        borderRight: "1.5px solid rgb(212, 212, 212)"
    }

    const backgroundImage = {
        height: "40%",
        width: "100%",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    }
    const imageStyle = {
        height: 150,
        width: 150,
        borderRadius: 75,
        position: 'absolute',
        marginTop: "8%"
    }
    const icon = {
        height: 20,
        width: 20,
    }
    const name = {
        color: 'black', 
        marginTop: "20%"
    }
    const centerView = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column'
    }
    const emailContainer = {
        flexDirection: 'row', 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: 30 
    }
    const hungaryContainer = {
        display: 'flex', 
        textDecoration: 'none'
    }
    const followersContainer = {
        display: 'flex', 
        flexDirection: 'row', 
        width: "100%", 
        borderTop: "1px solid rgb(212, 212, 212)", 
        marginTop: 20
    }
    const followersTextContainer = {
        height: 70,  
        width: '50%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        display: "flex",  
        flexDirection: 'column', 
        marginTop: 0, 
    }
    const followerText = {
        width: "100%", 
        backgroundColor: 'green', 
        paddingTop: 10, 
        paddingBottom: 10, 
        borderBottomRightRadius: 12, 
        borderBottomLeftRadius: 12, 
        display:'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textDecoration: 'none'
    }

    console.log("props --->", props.match.params.id && props.profile?.data?.id ? props.profile.data.first_name : null)

    return (
        <div style={mainContainer}>
            {props.match.params.id && props.profile?.data?.id ? (
                <div style={profileContainer}>
                    <img src={pic} alt="pic" style={backgroundImage} />
                    <img src={props.profile.data.avatar} style={imageStyle} alt="Logo" />
                        <h1 style={name}>{props.profile.data.first_name + props.profile.data.last_name}</h1>
                    <div style={centerView}>
                        <a>{props.profile.support.text.slice(0, 40)}</a>
                        <a>{props.profile.support.text.slice(40, props.profile.support.text.length)}</a>
                    </div>
                    <div style={emailContainer}>
                        <a href="#" style={hungaryContainer}>
                            <img src={email} alt="pic" style={icon} />
                            <a style={{ marginLeft: 10, color: 'black' }}>Hungary</a>
                        </a>
                        <a href="#" style={{...hungaryContainer, marginLeft: 40}}>
                            <img src={location} alt="pic" style={icon} />
                            <a style={{ marginLeft: 7, color: 'black' }}>Send E-mail</a>
                        </a>
                    </div>
                    <div style={followersContainer}>
                        <div style={{...followersTextContainer, borderRight: "1px solid rgb(212, 212, 212)"}}>
                            <h1 style={{marginBottom: 0}}>8000</h1>
                            <a style={{marginTop: 0, marginBottom: 25}}>followers</a>
                        </div>
                        <div style={followersTextContainer}>
                            <h1 style={{marginBottom: 0}}>3650</h1>
                            <a style={{marginTop: 0, marginBottom: 25}}>followers</a>
                        </div>
                    </div>
                    <a href="#" style={followerText}>
                        <h1 style={{color: "white", marginTop: 0, marginBottom: 0}}>follow</h1>
                    </a>
                </div>
            ) : (
                    null
                )}
        </div>
    )
};

const mapStateToProps = (state) => ({
    profile: state.cartReducer.profile,
});

export default connect(
    mapStateToProps,
)(ProfileScreen);
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../actions/homeAction";
import Profile from "./profile";
import gif from "../assets/image/Spin-1s-200px.gif"

function Home(props) {

  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await props.fetchData();
    setLoading(false);
  }, [])

  const data = props.cart;

  const getStartedContainer = {
    background:'linear-gradient(rgba(250,0,0,0.5),transparent)',
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 40
  }

  return loading ? (
    <img src={gif} alt='loading'/>
  ) :(
    <div style={{display: 'flex', justifyContent: 'center', alignITems: 'center'}}>
      <div style={{...getStartedContainer, backgroundColor: "yellow"}}>
          {data.length>0 && data?.map((item) => (
            <Profile
              id={item.id}
              email={item.email}
              firstName={item.first_name}
              lastName={item.last_name}
              profileImage={item.avatar}
            />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
     cart: state.cartReducer.cart,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        fetchData
      },
      dispatch
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

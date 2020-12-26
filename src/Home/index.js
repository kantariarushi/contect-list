import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showCart } from "../actions/homeAction";

function Home(props) {

  const handelClick = async () => {
    await props.showCart("rushi");
    console.log("here --->", props.cart);
  }
  return (
    <a href="#" onClick={() => handelClick()}>
        this is our app
    </a>
  );
}

const mapStateToProps = (state) => ({
     cart: state.cartReducer,
});

// const mapDispatchToProps = (dispatch) => ({
//         showCart: () => dispatch(showCart("rushi"))
//   });

  function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(
        {
          showCart
        },
        dispatch
      ),
    };
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

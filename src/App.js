import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./constants/configureStore";
import Home from "./Home";

const { store } = configureStore()

function App() {
  return (
    <Provider store={store}>
        <Home />
    </Provider>
  );
}

export default App;

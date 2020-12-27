import React from 'react';
import { Provider } from "react-redux";
import Home from "./Home";
import store from "./constants/configureStore";

function App() {
  return (
    <Provider store={store}>
        <Home />
    </Provider>
  );
}

export default App;

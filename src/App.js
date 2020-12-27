import React from 'react';
import { Provider } from "react-redux";
import Home from "./Home";
import ProfileScreen from "./ProfileScreen";
import store from "./constants/configureStore";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path={"/ProfileScreen/:id"} component={ProfileScreen} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

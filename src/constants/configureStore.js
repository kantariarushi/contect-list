import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from "../constants/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2,
//   whitelist: ['auth', 'Home'] // only auth will be persisted
//   //blacklist: ['navigation'] // navigation will not be persisted
// };

// const persistedReducer = persistReducer(rootReducer);

  //const store = createStore(rootReducer, applyMiddleware(thunk));
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  
  export default store;
import {all} from "redux-saga/effects";
import {waitForFetchProducts} from "./sagas/homeSagas";

export default function* rootSaga() {
    yield all([waitForFetchProducts()])
}
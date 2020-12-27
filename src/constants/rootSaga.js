import {all} from "redux-saga/effects";
import {waitForFetchProducts, waitForFetchProfile} from "./sagas/homeSagas";

export default function* rootSaga() {
    yield all([waitForFetchProducts(), waitForFetchProfile()])
}
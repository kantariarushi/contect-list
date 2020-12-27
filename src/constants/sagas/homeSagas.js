import { takeEvery, call, put } from "redux-saga/effects";
import * as actionType from "../actionType";

function* fetchData(action) {
    try{
        const json = yield fetch(`https://reqres.in/api/users?page=${action.status}`)
        .then(response => response.json(), );
        yield put({type: actionType.ADD_DATA, value: json.data});
    }catch (e) {}
}

export function* waitForFetchProducts() {
    yield takeEvery(actionType.FETCH_DATA, fetchData);
}

function* fetchProfile(action) {
    try{
        const json = yield fetch(`https://reqres.in/api/users/${action.profileNo}`)
        .then(response => response.json(), );
        yield put({type: actionType.ADD_PROFILE, value: json});
    }catch (e) {}
}

export function* waitForFetchProfile() {
    yield takeEvery(actionType.FETCH_PROFILE, fetchProfile);
}
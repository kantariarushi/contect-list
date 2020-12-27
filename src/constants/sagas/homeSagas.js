import { takeEvery, call, put } from "redux-saga/effects";
import * as actionType from "../actionType";

function* fetchData() {
    try{
        console.log("here");
        const json = yield fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json(), );
        yield put({type: actionType.ADD_DATA, value: json.data});
    }catch (e) {}
}

export function* waitForFetchProducts() {
    yield takeEvery(actionType.FETCH_DATA, fetchData);
}
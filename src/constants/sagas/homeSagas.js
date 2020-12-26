import { takeEvery, call, put } from "redux-saga/effects";
import * as actionType from "../actionType";
import { showCarts } from "../../actions/homeAction";

function* fetchProducts() {
    try{
        console.log("here");
        //const products = yield call("rushi");
        yield put(showCarts("rushi"));
    }catch (e) {}
}

export function* waitForFetchProducts() {
    yield takeEvery(actionType.SHOW_CART, fetchProducts);
}
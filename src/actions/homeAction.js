import * as actionType from "../constants/actionType";

export function fetchData(){
    return { type: actionType.FETCH_DATA, status: 2}
};

export function fetchProfile(id){
    return {type: actionType.FETCH_PROFILE, profileNo: id}
}
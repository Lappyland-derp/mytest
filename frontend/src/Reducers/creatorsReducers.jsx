import { CREATOR_LIST_FAIL, CREATOR_LIST_REQUEST, CREATOR_LIST_SUCCESS } from "../Constants/creatorConstants";

export const creatorListReducer = (state={creatorss: []}, action) => {
    switch (action.type){
        case CREATOR_LIST_REQUEST:
            return {loading: true, creators: []};
        case CREATOR_LIST_SUCCESS:
            return {loading: false, creators: action.payload};
        case CREATOR_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state
    }
}
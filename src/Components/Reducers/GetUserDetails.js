import {GET_USER_DETAILS} from "../Actions/GetUserDetails";
import {UPDATE_USER_DETAILS} from "../Actions/UpdateUsers";

const GetUserDetailsReducer=(state=[],action)=>{
    switch(action.type){
        case GET_USER_DETAILS:
            return action.user;
        case UPDATE_USER_DETAILS:
            return action.user;
        default:
            return state;
    }
}

export default GetUserDetailsReducer;
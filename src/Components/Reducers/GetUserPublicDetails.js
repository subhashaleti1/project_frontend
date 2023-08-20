import { GET_USER_PUBLIC_DETAILS } from "../Actions/GetUserPublicInformation";

const GetUserPublicDetailsReducer=(state=[],action)=>{
    switch(action.type){
        case GET_USER_PUBLIC_DETAILS:
            return action.user;
        default:
            return state;

    }
}

export default GetUserPublicDetailsReducer;
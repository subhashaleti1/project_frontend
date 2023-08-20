import {UpdateUsers} from "../../../Services/UpdateUsers";

export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS"

export const UpdateUserDetails = async (dispatch,user) => {
    const user_info = await UpdateUsers(user);
    dispatch({
        type: UPDATE_USER_DETAILS,
        user:user,
    });
    return user_info;
}




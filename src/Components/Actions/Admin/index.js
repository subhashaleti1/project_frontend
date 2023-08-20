import {
  FetchAllUsersService,
  RemoveUserService,
} from "../../../Services/Admin";

export const FetchUsers = async () => {
  const info = await FetchAllUsersService();
  return info;
};

export const deleteUser = async (delId) => {
  const info = await RemoveUserService(delId);
  return info;
};

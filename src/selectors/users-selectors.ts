import { RootState } from '../redux/store';

export const userListSelector = (state: RootState) => state.users.userList;
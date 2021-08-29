import { UserAction, UserActionTypes, usersState } from '../../types/redux-types/redux-types';

const initialState: usersState = {
  userList: null,
};

function usersReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.FETCH_GITHUB_USERS:
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
}

export default usersReducer;

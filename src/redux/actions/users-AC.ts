import { UserActionTypes } from '../../types/redux-types/redux-types';

export function fetchGitHubUsers(users: any) {
  return {
    type: UserActionTypes.FETCH_GITHUB_USERS,
    payload: users,
  };
}

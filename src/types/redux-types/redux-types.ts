export interface action {
  type: string;
  payload?: any;
}

export enum UserActionTypes {
  FETCH_GITHUB_USERS = 'FETCH_GITHUB_USERS',
}

export interface FetchGitHubUsersA {
  type: UserActionTypes.FETCH_GITHUB_USERS;
  payload: any;
}

export type UserAction = FetchGitHubUsersA;

export interface usersState {
  userList: userObj[] | null;
}

export interface userObj {
  avatar_url: string;
  login: string | null;
  email: string | null;
  location: string | null;
  created_at: string | null;
  followers: number | null;
  following: number | null;
  bio: string | null;
  url: string | null;
  repos_url: string | null;
}

export interface repositoryObj {
  id: number | null;
  name: string | null;
  forks: number | null;
  stargazers_count: number | null;
  html_url: string;
}

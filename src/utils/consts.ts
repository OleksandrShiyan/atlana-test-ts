import { userObj } from '../types/redux-types/redux-types';

export const initialUser: userObj = {
  avatar_url: '',
  login: null,
  email: null,
  location: null,
  created_at: null,
  followers: null,
  following: null,
  bio: null,
  url: null,
  repos_url: null,
};

export const initialUserRepos = [
  {
    id: 1,
    name: '',
    forks: null,
    stargazers_count: null,
    html_url: '',
  },
];
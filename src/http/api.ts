import axios from 'axios';

export const gitHubAPI = {
  getUsers(q: string) {
    return axios.get(`https://api.github.com/search/users?q=${q}`);
  },
  getUserData(url: string) {
    return axios.get(url);
  },
  getUserRepos(url: string) {
    return axios.get(url);
  },
};
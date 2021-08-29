import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './UserModal.module.css';
import Repository from './Repository/Repository';
import { gitHubAPI } from '../../../http/api';
import { repositoryObj, userObj } from '../../../types/redux-types/redux-types';
import { initialUser, initialUserRepos } from '../../../utils/consts';

interface UserModalProps {
  user: userObj;
  setCurrentUser: (user: userObj | null) => void;
}

const UserModal = ({ user, setCurrentUser }: UserModalProps) => {
  const [userData, setUserData] = useState<userObj>(initialUser);
  const [userRepos, setUserRepos] = useState<repositoryObj[]>(initialUserRepos);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (user.url)
      gitHubAPI.getUserData(user.url).then((event) => {
        setUserData(event.data);
      });

    if (user.repos_url)
      gitHubAPI.getUserRepos(user.repos_url).then((event) => {
        setUserRepos(event.data);
      });
  }, [user.url, user.repos_url]);

  const changeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.titleWrapper}>
          <div className={style.title}>
            <span className={style.boldText}>Git Hub Searcher</span>
            <button onClick={() => setCurrentUser(null)}>Close</button>
          </div>
          <div className={style.userWrapper}>
            <img className={style.avatar} src={user.avatar_url} alt="user avatar" />
            <div className={style.userInfo}>
              <span>Login: {userData.login}</span>
              <span>Email: {userData.email}</span>
              <span>Location: {userData.location}</span>
              <span>Join date: {userData.created_at?.slice(0, 10)}</span>
              <span>{userData.followers} Followers</span>
              <span>Following {userData.following}</span>
            </div>
          </div>
          <span>{userData.bio}</span>
        </div>
        <div className={style.inputWrapper}>
          <input className={style.input} value={searchValue} onChange={changeSearch} type="text" />
        </div>
        <div>
          {userRepos
            .filter((repo) => repo?.name?.includes(searchValue))
            .map((repo) => (
              <Repository key={repo.id} repository={repo} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserModal;

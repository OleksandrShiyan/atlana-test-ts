import React from 'react';
import style from './User.module.css';
import { userObj } from '../../../types/redux-types/redux-types';

interface UserProps {
  user: userObj;
  setCurrentUser: (user: userObj) => void;
}

const User = ({ user, setCurrentUser }: UserProps) => {
  return (
    <div className={style.userWrapper} onClick={() => setCurrentUser(user)}>
      <span className={style.avatar}>
        <img className={style.img} src={user.avatar_url} alt="user avatar" />
      </span>
      <span className={style.login}>Login: {user.login}</span>
      <span className={style.repos}>Repos: ##</span>
    </div>
  );
};

export default User;

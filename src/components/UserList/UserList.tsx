import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './UserList.module.css';
import { gitHubAPI } from '../../http/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubUsers } from '../../redux/actions/users-AC';
import User from './User/User';
import UserModal from './UserModal/UserModal';
import { userListSelector } from '../../selectors/users-selectors';
import { userObj } from '../../types/redux-types/redux-types';

const UserList = () => {
  const [userName, setUserName] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<userObj | null>(null);

  const userList = useSelector(userListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userName) {
      gitHubAPI.getUsers(userName).then((event) => {
        dispatch(fetchGitHubUsers(event.data));
      });
    }
  }, [userName, dispatch]);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className={style.userList}>
      <h1>Git Hub Searcher</h1>
      <input
        className={style.input}
        value={userName}
        onChange={changeName}
        type="text"
        placeholder="Search for Users"
      />
      {userList?.items?.map((user: userObj) => (
        <User key={user.login} setCurrentUser={setCurrentUser} user={user} />
      ))}
      {currentUser ? <UserModal user={currentUser} setCurrentUser={setCurrentUser} /> : null}
    </div>
  );
};

export default UserList;

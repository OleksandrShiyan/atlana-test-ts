import React from 'react';
import style from './Repository.module.css';
import { repositoryObj } from '../../../../types/redux-types/redux-types';

interface RepositoryProps {
  repository: repositoryObj;
}

const Repository = ({ repository }: RepositoryProps) => {
  return (
    <a className={style.link} target="_blank" href={repository.html_url} rel="noreferrer">
      <div className={style.repoWrapper}>
        <span>{repository.name}</span>
        <div className={style.repoInfo}>
          <span>{repository.forks} Forks</span>
          <span>{repository.stargazers_count} Stars</span>
        </div>
      </div>
    </a>
  );
};

export default Repository;

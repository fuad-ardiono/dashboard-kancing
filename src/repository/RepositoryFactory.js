import AuthRepository from './AuthRepository';

const repositories = {
  auth: AuthRepository,
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
};

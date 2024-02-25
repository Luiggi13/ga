import { ConfigApp } from './config.type';

export const configApp = (): ConfigApp => {
  return {
    secret_jwt: process.env.SECRET_JWT || '',
  };
};

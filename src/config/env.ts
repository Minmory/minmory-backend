import * as dotenv from 'dotenv';
import getEnv from './get-env';

dotenv.config();

const env = {
  DB_CONFIG: {
    DB_USER: getEnv('DB_USER'),
    DB_PASSWORD: getEnv('DB_PASSWORD'),
    DB_HOST: getEnv('DB_HOST'),
    DB_NAME: process.env.NODE_ENV === 'test' ? 'test' : getEnv('DB_NAME'),
  },
};

export default env;

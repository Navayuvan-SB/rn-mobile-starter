import axios from 'axios';
import { Urls } from '../configs/urls';
import { Constants } from './constants';

const BASE_URL = Urls.APIBaseUrl;

const GetHttpClient = () => {
  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${Constants.accessToken}`,
    },
  });
  return client;
};

export { GetHttpClient };

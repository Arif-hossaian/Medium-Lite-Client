import axios from 'axios';
import { baseApiURL } from '../baseApiURL';

export const postAPI = async (
  url: string,
  post: object,
  token?: string
): Promise<any> => {
  const res = await axios.post(`${baseApiURL}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

import Axios, {AxiosResponse} from 'axios';

export const axios = Axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 10 * 1000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function axiosGet<T>(
  endpoint: '/api/exampleData.json'
): Promise<T> {
  try {
    const res: AxiosResponse<T> = await axios.get<T>(encodeURI(endpoint));
    debugger;
    return res.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }

    throw error;
  }
}

import axios, { AxiosRequestConfig, HttpStatusCode } from 'axios';
// import axiosRetry from 'axios-retry';
import fetchBuilder from 'fetch-retry';
import originalFetch from 'isomorphic-fetch';

// const options = {
//   retries: 3,
//   retryDelay: axiosRetry.exponentialDelay,
// };

// axiosRetry(axios, options);

export const fetchRetry = async (config: AxiosRequestConfig<any>) => {
  try {
    // const fetch = fetchBuilder(originalFetch, options);
    const data = await axios<{
      data: {};
      results?: number;
      status: ResponseStatus;
      message: string;
    }>({
      method: 'GET',
      ...config,
    });

    if (data.status !== HttpStatusCode.Ok || !data.data) throw new Error('Failed to fetch user');

    // const json = await data.json();
    return data;
  } catch (err) {
    console.error('Fetch retry failed');
    console.error(err, config);
    return { data: null, results: 0, status: HttpStatusCode.BadRequest };
  }
};

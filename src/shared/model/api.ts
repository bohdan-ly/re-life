import axios, { AxiosRequestConfig, HttpStatusCode } from 'axios';
import { getCookies } from 'cookies-next';

import { notify } from 'shared/ui/theme';

export class Api {
  static handleErrorMessage(obj: { message?: string; msg?: string; code?: number }) {
    if (!obj.message && !obj.msg) return;
    if (obj.code === 4003) return;

    notify({
      message: obj.msg || obj.message || '',
      type: obj.code || '10000',
    });
  }

  static async fetch(config: AxiosRequestConfig<any>) {
    try {
      // const fetch = fetchBuilder(originalFetch, options);

      const data = await axios<{
        data?: {} | string;
        results?: number;
        status: ResponseStatus;
        message: string;
      }>({
        method: 'GET',
        validateStatus: function (status) {
          return status >= 200 && status < 400;
        },
        ...config,
      });

      if (data.status !== 204 && !data.data) throw new Error('Failed to fetch');

      return data;
    } catch (err: any) {
      console.error('Fetch failed');
      console.error(err, config);
      // notify({
      //   message: err.msg || err.message || '',
      //   type: err.code || '10000',
      // });
      return { data: null, results: 0, status: HttpStatusCode.BadRequest };
    }
  }
}

import axios, { AxiosRequestConfig, HttpStatusCode } from 'axios';

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
        data: {};
        results?: number;
        status: ResponseStatus;
        message: string;
      }>({
        method: 'GET',
        ...config,
      });

      if (!data.data) throw new Error('Failed to fetch');
      return data;
    } catch (err) {
      console.error('Fetch failed');
      console.error(err, config);
      return { data: null, results: 0, status: HttpStatusCode.BadRequest };
    }
  }
}

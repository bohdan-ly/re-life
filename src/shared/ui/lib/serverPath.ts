import path from 'path';

import getConfig from 'next/config';

export const serverPath = (staticFilePath: string) => {
  return path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, staticFilePath);
};

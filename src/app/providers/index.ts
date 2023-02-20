import compose from 'compose-function';

import { withTheme } from 'shared/ui/theme';

import { withStore } from './with-store';

export const withProviders = compose<React.FC>(
  // withNotifications,
  // withFallback,
  withTheme,
  withStore,
);

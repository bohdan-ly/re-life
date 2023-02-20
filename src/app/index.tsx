import React from 'react';

import { withProviders } from './providers';

export const Layouts: React.FC<{ component: React.FC; withLayout: boolean }> = ({
  component,
}): any => withProviders(component)({});

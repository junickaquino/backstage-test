import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const terraformRunnerPlugin = createPlugin({
  id: 'terraform-runner',
  routes: {
    root: rootRouteRef,
  },
});

export const TerraformRunnerPage = terraformRunnerPlugin.provide(
  createRoutableExtension({
    name: 'TerraformRunnerPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

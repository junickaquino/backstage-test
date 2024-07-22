import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { terraformRunnerPlugin, TerraformRunnerPage } from '../src/plugin';

createDevApp()
  .registerPlugin(terraformRunnerPlugin)
  .addPage({
    element: <TerraformRunnerPage />,
    title: 'Root Page',
    path: '/terraform-runner',
  })
  .render();

/// <reference types="react" />
import * as react from 'react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';

declare const terraformRunnerPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const TerraformRunnerPage: () => react.JSX.Element;

export { TerraformRunnerPage, terraformRunnerPlugin };

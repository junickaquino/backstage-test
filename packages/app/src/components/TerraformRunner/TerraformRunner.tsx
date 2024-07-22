// packages/app/src/components/TerraformRunner/TerraformRunner.tsx
import React from 'react';
import { Page, Header } from '@backstage/core-components';
import { useApi, alertApiRef } from '@backstage/core-plugin-api';
import { Button } from '@material-ui/core';

export const TerraformRunner = () => {
  const alertApi = useApi(alertApiRef);

  const runTerraform = async () => {
    try {
      // Add your logic to trigger the GitHub Actions workflow
      // This can be done by creating a GitHub REST API request to trigger the workflow

      // Example placeholder for triggering the workflow (to be replaced with actual logic)
      const response = await fetch('https://api.github.com/repos/your-username/your-repo/actions/workflows/terraform.yml/dispatches', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer YOUR_GITHUB_TOKEN`,
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          ref: 'main',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to trigger the GitHub Actions workflow');
      }

      alertApi.post({ message: 'Terraform script executed successfully!', severity: 'success' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      alertApi.post({ message: `Error: ${errorMessage}`, severity: 'error' });
    }
  };

  return (
    <Page themeId="tool">
      <Header title="Terraform Runner" />
      <Button variant="contained" color="primary" onClick={runTerraform}>
        Run Terraform Script
      </Button>
    </Page>
  );
};

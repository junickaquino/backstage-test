import { terraformRunnerPlugin } from './plugin';

describe('terraform-runner', () => {
  it('should export plugin', () => {
    expect(terraformRunnerPlugin).toBeDefined();
  });
});

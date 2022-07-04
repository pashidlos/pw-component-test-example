import { test as base } from "@playwright/experimental-ct-react";
import { PlaywrightVisualRegressionTracker } from "@visual-regression-tracker/agent-playwright";

interface Fixture {
  vrt: PlaywrightVisualRegressionTracker;
}

export const componentTest = base.extend<Fixture>({
  vrt: async ({ browserName }, use) => {
    const vrt = new PlaywrightVisualRegressionTracker(browserName);

    await vrt.start();
    await use(vrt);
    await vrt.stop();
  },
});

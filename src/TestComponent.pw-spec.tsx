import { expect, test } from "@playwright/experimental-ct-react";
import React from "react";
import TestComponent from "./TestComponent";

// test('should work', async ({ mount }) => {
//     const component = await mount(<Button>HUI</Button>);
//
//     await expect(component).toContainText('Test');
// });

test("should work", async ({ mount }) => {
  const component = await mount(<TestComponent />);

  await expect(component).toContainText("Test");
});

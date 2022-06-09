import { expect, test } from "@playwright/experimental-ct-react";
import React from "react";
import { TestComponent } from "..";

test("should work", async ({ mount }) => {
  const component = await mount(<TestComponent hint="Test"/>);

  await expect(component).toContainText("Test");
});

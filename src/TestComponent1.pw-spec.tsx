import { expect, test } from "@playwright/experimental-ct-react";
import React from "react";
import TestComponent from "./TestComponent";
import { DisableIcon } from "./DisableIcon";

test("should work local icon", async ({ mount }) => {
  const component = await mount(<TestComponent icon={DisableIcon} />);

  await expect(component).toContainText("Test");
});
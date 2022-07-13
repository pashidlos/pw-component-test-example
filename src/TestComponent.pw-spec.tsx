import { expect, test } from "@playwright/experimental-ct-react";
import React from "react";
import { DisableIcon } from "./DisableIcon";
import TestComponent from "./TestComponent";

test("should work", async ({ mount }) => {
  const component = await mount(<TestComponent icon={DisableIcon}/>);

  await expect(component).toContainText("Test");
});

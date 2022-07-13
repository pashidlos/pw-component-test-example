import { expect, test } from "@playwright/experimental-ct-react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import React from "react";
import TestComponent from "./TestComponent";

test("should work external icon", async ({ mount }) => {
  const component = await mount(<TestComponent icon={AccountTreeIcon} />);

  await expect(component).toContainText("Test");
});
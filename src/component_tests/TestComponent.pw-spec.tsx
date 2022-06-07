import { expect, test } from "@playwright/experimental-ct-react";
import React from "react";
import TestComponent from "../TestComponent";
import { Breadcrumbs } from "../widget/Breadcrumbs";

test("should work", async ({ mount }) => {
  const component = await mount(
    <Breadcrumbs path={["asdasd"]}>
      <TestComponent />
    </Breadcrumbs>
  );

  await expect(component).toContainText("Test");
});

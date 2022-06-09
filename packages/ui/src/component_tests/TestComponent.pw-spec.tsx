import { expect, test } from "@playwright/experimental-ct-react";
import React from "react";
import { Breadcrumbs, TestComponent, TestComponentWithExternalFn } from "..";

// test("should work", async ({ mount }) => {
//   const component = await mount(
//     <Breadcrumbs path={["asdasd"]}>
//       <TestComponent />
//     </Breadcrumbs>
//   );

//   await expect(component).toContainText("Test");
// });

test("should work", async ({ mount }) => {
  const component = await mount(
    <Breadcrumbs path={["asdasd"]}>
      <TestComponentWithExternalFn />
    </Breadcrumbs>
  );

  await expect(component).toContainText("Test");
});
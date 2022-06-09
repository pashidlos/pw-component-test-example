import { Button, Theme } from "@mui/material";

import React from "react";

export type ClassNameMap<ClassKey extends string = string> = Record<
  ClassKey,
  string
>;

export interface StyledComponentProps<ClassKey extends string = string> {
  classes?: Partial<ClassNameMap<ClassKey>>;
}

export interface AutomationTestAttr {
  locator?: string;
}

export interface Automation<T extends string = string> {
  locators?: Partial<Record<T, string>>;
}

export type LocatorsMap<T extends Automation> = NonNullable<T["locators"]>;
export type BreadcrumbsClassKey = "root" | "breadcrumbs" | "routeContainer";
export type BreadcrumbsLocators = Automation<"title">;

const defaultLocators: LocatorsMap<BreadcrumbsLocators> = {
  title: "breadcrumbs-titles",
};

export interface BreadcrumbsProps
  extends StyledComponentProps<BreadcrumbsClassKey>,
    BreadcrumbsLocators {
  path: string[];
  children?: React.ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { path, children, classes = {} } = props;
  const lastIndex = path.length - 1;
  const title = path[lastIndex];

  return (
    <div className={classes.root}>
      <div>
        <div>
          <div>{title}</div>
          <div>
            {path.map((p, index) => (
              <React.Fragment key={index}>
                {p}
                {index < lastIndex ? <Button /> : null}
              </React.Fragment>
            ))}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

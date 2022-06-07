import { Theme } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import classNames from "classnames";

import React from "react";

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;


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

const userStyles = makeStyles(({ typography, spacing }: Theme) =>
  createStyles({
    breadcrumbs: {
      display: "flex",
      alignItems: "center",
      margin: spacing(1, 0, 6, 0),
    },

    routeContainer: {
      flex: "1",
    },

    title: {
      fontFamily: typography.fontFamily,
      fontSize: 28,
      fontWeight: typography.fontWeightLight as number /* to change */,
      color: "#050401",
    },

    route: {
      fontFamily: typography.fontFamily,
      fontSize: 11,
      display: "flex",
      alignItems: "center",
    },

    next: {
      fontSize: 14,
    },
  })
);

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
  const styles = userStyles();
  const lastIndex = path.length - 1;
  const title = path[lastIndex];

  return (
    <div className={classes.root}>
      <div className={classNames(styles.breadcrumbs, classes.breadcrumbs)}>
        <div
          className={classNames(styles.routeContainer, classes.routeContainer)}
        >
          <div
            className={styles.title}
          >
            {title}
          </div>
          <div className={styles.route}>
            {path.map((p, index) => (
              <React.Fragment key={index}>
                {p}
                {index < lastIndex ? (
                  <NavigateNextIcon className={styles.next} />
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

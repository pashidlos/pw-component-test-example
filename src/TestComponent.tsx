import { Typography } from "@mui/material";
import React from "react";
import { FC, memo } from "react";
import { extname } from "path";

export const WS_BROKER_URL = `ws://${window.location.host}}`;

export interface DefaultTitleProps {
  hint?: string;
}

export function validateFileExtension(file: File): string {
  return extname(file.name);
}

export const TestComponent: FC<DefaultTitleProps> = memo((props) => {
  const { hint } = props;
console.log("asdasasdfasdadsfasdf")
  return <div>{hint}</div>;
});

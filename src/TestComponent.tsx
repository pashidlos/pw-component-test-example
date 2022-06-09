import { Typography } from "@mui/material";
import React from "react";
import { FC, memo } from "react";
import { extname } from "path";

export const WS_BROKER_URL = `ws://${window.location.host}}`;

export interface DefaultTitleProps {
  total: number;
  hint?: string;
}

export function validateFileExtension(file: File): string {
  return extname(file.name);
}

export const TestComponent: FC<DefaultTitleProps> = memo((props) => {
  const { hint, total } = props;

  return (
    <div>
      <Typography variant="h6">{`Presenting ${total} results`}</Typography>
      {hint}
    </div>
  );
});

import { SvgIconProps } from "@mui/material";
import React, { ComponentType } from "react";
import { DisableIcon } from "./DisableIcon";

export interface DataViewToolbarActionButtonProps {
    icon: ComponentType<SvgIconProps>;
}

const TestComponent = (props: DataViewToolbarActionButtonProps) => {
  const { icon: Icon } = props;
  return (
    <div>
      <Icon />
      Test
    </div>
  );
};

export default TestComponent;

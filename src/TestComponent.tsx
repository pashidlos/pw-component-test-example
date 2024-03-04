import {Button} from "@mui/material";
import React from "react";


export interface DataViewToolbarActionButtonProps {
    icon: React.ReactNode;
}

const TestComponent = (props: DataViewToolbarActionButtonProps) => {
    const {icon: Icon} = props;

    return (
        <div>
            <Button
                startIcon={Icon}
            >
                Test
            </Button>
        </div>
    );
};

export default TestComponent;

import React from 'react';
import {
    SvgIconProps,
    createSvgIcon,
} from '@mui/material';

const DisableIconOriginal = createSvgIcon(
    <>
        <path d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 23.077C5.892 23.077.923 18.107.923 12 .923 5.892 5.893.923 12 .923c6.108 0 11.077 4.97 11.077 11.077 0 6.108-4.97 11.077-11.077 11.077z'/>
        <path d='M16.868 8.132a.45.45 0 0 0-.636 0L12.5 11.864 8.768 8.132a.45.45 0 1 0-.636.636l3.732 3.732-3.732 3.732a.45.45 0 1 0 .636.636l3.732-3.732 3.732 3.732a.449.449 0 0 0 .636 0 .45.45 0 0 0 0-.636L13.136 12.5l3.732-3.732a.45.45 0 0 0 0-.636z'/>
    </>,
    'Disable',
);

export const DisableIcon = React.forwardRef((props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => (
    <DisableIconOriginal ref={ref} viewBox="0 0 24 24" {...props}/>
));

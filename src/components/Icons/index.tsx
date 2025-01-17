import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export function TiDBCloudLogo(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 256.74 256.74" {...props}>
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="1798.23"
          y1="-5866.36"
          x2="1803.95"
          y2="-5872.2"
          gradientTransform="translate(-54830.49 -127812.94) scale(30.52 -21.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e30c34" />
          <stop offset="1" stopColor="#b7062c" />
        </linearGradient>
      </defs>
      <g id="Layer_1" data-name="Layer 1">
        <g>
          <rect fill="none" width="256.74" height="256.74" />
          <g id="Group_1794" data-name="Group 1794">
            <path
              id="Path_4369"
              data-name="Path 4369"
              fill="url(#linear-gradient)"
              d="M202.51,79.58c-23.51-40.94-75.76-55.07-116.7-31.55-22.03,12.65-37.29,34.44-41.64,59.47C13.48,114.6-5.63,145.24,1.49,175.93c5.99,25.86,29.04,44.17,55.58,44.16,1.93,0,3.86-.1,5.78-.29h116.83c1.91,.15,3.83,.29,5.78,.29,39.37,0,71.29-31.92,71.29-71.29,0-32.8-22.38-61.37-54.23-69.22h0Z"
            />
            <g id="Group_1793" data-name="Group 1793">
              <path
                id="Path_4370"
                data-name="Path 4370"
                fill="#fff"
                d="M128.29,81.27l-44.16,25.5v25.49l22.09-12.75v51.32l22.08,12.73h0V106.75l22.08-12.75-22.08-12.74Z"
              />
              <path
                id="Path_4371"
                data-name="Path 4371"
                fill="#fff"
                d="M150.5,119.64v51.17l22.17-12.8v-51.19l-22.17,12.81Z"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}

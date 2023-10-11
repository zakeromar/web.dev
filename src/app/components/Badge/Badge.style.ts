import styled from '@emotion/styled'
import { Typography } from "@mui/material";
import { BadgeProps } from "./Badge";

export const BadgeRoot = styled(Typography)`
width: fit-content;
height: auto;
padding: 2px;
border-top-right-radius: ${(props:BadgeProps) => props.radiusSize || '8px'};
border-bottom-left-radius: ${(props:BadgeProps) => props.radiusSize || '8px'};
background: ${(props:BadgeProps) => props.color || '#DC494A'};
text-align: center;
line-height: normal;
`


import { Chip, lighten } from '@mui/material'
import styled from '@emotion/styled'

export const TagRoot = styled(Chip) <{ color?: 'success' | 'warning' | 'error' }>`
color: ${(props) => (props.color ? props.theme.palette[props.color].main : 'unset')};
background: ${(props) =>
    props.color
      ? lighten(props.theme.palette[props.color].light, 0.8)
      : 'unset'};
width: fit-content;
font-weight: 400;
`;

import { ReactNode } from 'react'
import { BadgeRoot } from './Badge.style'

export interface BadgeProps {
  children?: ReactNode
  color?: string
  radiusSize?: 8 | 12
}

export default function Badge(props: BadgeProps) {
  const {children, color, radiusSize} = props
  return (
    <BadgeRoot color={color} radiusSize={radiusSize}>
      {children}
    </BadgeRoot>
  )
}

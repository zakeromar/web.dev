import {TagRoot} from './Tag.style'

interface TagProps {
  label: string
  color?: 'success' | 'warning' | 'error'
}

export default function Tag(props: TagProps) {
  const {label, color} = props
  return <TagRoot label={label} color={color} variant={color ? 'filled' : 'outlined'} size="small" />
}

import { Alert } from '@mui/material'

interface SnackBarProps {
  message: string
  onClose?: () => void
}

export default function SnackBar(props: SnackBarProps) {
  const {message, onClose = () => {}} = props
  return (
    <Alert icon={<></>} onClose={onClose} color="info" variant="filled">
      {message}
    </Alert>
  )
}

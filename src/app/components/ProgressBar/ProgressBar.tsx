import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import { StepIconProps } from '@mui/material/StepIcon'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { ConnectorRoot, StepIconRoot } from './ProgressBar.style'

const _steps = [
  { id: '1', label: 'مرحله ۱' },
  { id: '2', label: 'مرحله ۲' },
  { id: '3', label: 'مرحله ۳' },
  { id: '4', label: 'مرحله ۴' },
]

function StepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  return (
    <StepIconRoot completed={completed} className={className}>
      {active ? <div className="StepIcon-circle" /> : <div className="StepIcon-completedIcon" />}
    </StepIconRoot>
  )
}

interface ProgressBarProps {
  steps?: { id: string; label: string }[]
  activeStep?: number
}

export default function ProgressBar(props: ProgressBarProps) {
  const { steps = _steps, activeStep = 2 } = props
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel connector={<ConnectorRoot />}>
        {steps?.map((step) => (
          <Step key={step.id}>
            <StepLabel StepIconComponent={StepIcon}>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

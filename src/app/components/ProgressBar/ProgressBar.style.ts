import {StepConnector, stepConnectorClasses} from '@mui/material'
import styled from '@emotion/styled'

export const StepIconRoot = styled.div`
  display: flex;
  height: 22px;
  align-items: center;
  
  .StepIcon-completedIcon {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #bdbdbd;
    ${(props:{completed?: boolean}) => props.completed && `
      background-color: #0A0A0A;
      border: none;
    `}
  }
  
  .StepIcon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #bdbdbd;
    
    &:after {
      content: '';
      display: flex;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #666666;
    }
    
    &:before {
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #0A0A0A;
    }
  }
`;

export const ConnectorRoot = styled(StepConnector)`
  &.${stepConnectorClasses.alternativeLabel} {
    top: 10px;
    left: calc(-50% + 16px);
    right: calc(50% + 16px);
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      border-color: #0A0A0A;
    }
  }

  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      border-color: #0A0A0A;
    }
  }

  & .${stepConnectorClasses.line} {
    border-color: #bdbdbd;
    border-top-width: 1px;
    border-radius: 1px;
  }
`;


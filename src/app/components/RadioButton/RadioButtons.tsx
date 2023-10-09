import * as React from 'react';
import Radio from '@mui/material/Radio';
export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
      <Radio
      onChange={handleChange}
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
      />
  );
}

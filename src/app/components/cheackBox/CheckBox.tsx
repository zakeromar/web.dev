
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Checkboxes = ({ defaultChecked = false, disabled = false, checked = false }) => {
    return (

        <Checkbox
            {...label}
            defaultChecked={defaultChecked}
            disabled={disabled}
        />

    );
};

export default Checkboxes
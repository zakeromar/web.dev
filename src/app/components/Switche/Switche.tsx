
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Switche = ({ defaultChecked = false, disabled = false, checked = false }) => {
    return (

        <Switch
            {...label}
            defaultChecked={defaultChecked}
            disabled={disabled}
        />


    );
};

export default Switche
import {FormControl, FormHelperText, FormLabel, Switch, switchClasses} from "@mui/joy";

export const SwitchControl = (props) => {
    const {label, description, callback, checked} = props;

    const handleChange = (e) =>{
        callback(e.target.checked);
    }

    return (
        <FormControl
            orientation="horizontal"
            sx={{ width: 300, justifyContent: 'space-between' }}
        >
            <div>
                <FormLabel>{label}</FormLabel>
                <FormHelperText sx={{ mt: 0 }}>{description}</FormHelperText>
            </div>
            <Switch
                checked={checked}
                onChange={handleChange}
                color={checked ? 'success' : 'neutral'}
                variant={checked ? 'solid' : 'outlined'}
                endDecorator={checked ? 'On' : 'Off'}
                slotProps={{
                    endDecorator: {
                        sx: {
                            minWidth: 24,
                        },
                    },
                }}
                sx={(theme) => ({
                    [`& .${switchClasses.thumb}`]: {
                        transition: 'width 0.2s, left 0.2s',
                    }
                })
            }
            />
        </FormControl>
    );
}
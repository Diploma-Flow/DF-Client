import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';

export default function PasswordMeterInput(props) {
    const { value: propValue, ...inputProps } = props;
    const [value, setValue] = React.useState(propValue || '');

    const minLength = 12;
    const hasValue = value.length > 0;

    return (
        <Stack
            spacing={0.5}
            sx={{
                '--hue': Math.min(value.length * 10, 120),
            }}
        >
            <Input
                {...inputProps} // Pass all properties to the Input component
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <LinearProgress
                determinate
                size="sm"
                value={Math.min((value.length * 100) / minLength, 100)}
                sx={{
                    bgcolor: 'background.level3',
                    color: 'hsl(var(--hue) 80% 40%)',
                    display: hasValue ? 'flex' : 'none',
                }}
            />
            <Typography
                level="body-xs"
                sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)', display: hasValue ? 'flex' : 'none', }}
            >
                {value.length < 3 && 'Very weak'}
                {value.length >= 3 && value.length < 6 && 'Weak'}
                {value.length >= 6 && value.length < 10 && 'Strong'}
                {value.length >= 10 && 'Very strong'}
            </Typography>
        </Stack>
    );
}

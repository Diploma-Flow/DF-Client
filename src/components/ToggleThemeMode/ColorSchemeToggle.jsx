import React from 'react';
import {IconButton, useColorScheme} from "@mui/joy";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

export default function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <IconButton
            variant="outlined"
            color="neutral"
            size="sm"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}

            // sx={{
            //     position: 'fixed',
            //     zIndex: 999,
            //     top: '1rem',
            //     right: '1rem',
            //     borderRadius: '50%',
            //     boxShadow: 'sm',
            // }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}
import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/joy/Box';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";

export default function EditorToolbar({handleFontChange}){
    const flagConfigurations = [
        { id: 'bold', icon: <FormatBoldRoundedIcon /> },
        { id: 'italic', icon: <FormatItalicRoundedIcon /> },
        { id: 'line-through', icon: <StrikethroughSRoundedIcon /> },
        { id: 'bullet', icon: <FormatListBulletedRoundedIcon /> },
    ];

    const [flags, setFlags] = useState({
        bold: false,
        italic: false,
        'line-through': false,
        bullet: false,
    });

    const handleFlagToggle = (flag) => {
        setFlags((prevFlags) => ({
            ...prevFlags,
            [flag]: !prevFlags[flag],
        }));
    };

    useEffect(() => {
        // This will be triggered after the state has been updated
        handleFontChange(flags);
    }, [flags]);

    return (
        <Box sx={{
            display: 'flex', gap: 0.5
        }}>
            <Select size="sm" defaultValue="1" sx={{ minWidth: 160}}>
                <Option value="1" >Normal text</Option>
                <Option value="2" sx={{ fontFamily: 'code' }}>
                    Code text
                </Option>
            </Select>

            <List sx={{
                display: 'flex',
                gap: 0.5,
                '& [role="button"]': { '--Icon-fontSize': '16px', borderRadius: '20%', padding: '8px' }
            }}
                  orientation="horizontal">
                {flagConfigurations.map((flag) => (
                    <ListItemButton
                        key={flag.id}
                        size="sm"
                        variant="plain"
                        color="neutral"
                        onClick={() => handleFlagToggle(flag.id)}
                        selected={flags[flag.id]}
                    >
                        {flag.icon}
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

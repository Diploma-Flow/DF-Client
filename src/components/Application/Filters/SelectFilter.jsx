import {FormControl, FormLabel, Select, selectClasses} from "@mui/joy";
import * as React from "react";
import {useRef, useState} from "react";
import {KeyboardArrowDown} from "@mui/icons-material";
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';

export const SelectFilter = ({ title, onChange, children }) => {
    const [value, setValue] = useState('');
    const action = useRef(null);

    const handleFilterChange = (value) => {
        setValue(value);
        onChange?.(value || '');
    }

    return (
        <FormControl size="sm" sx={{
            width: {
                md: 'auto',
                xs: '100%',
            }
        }}>
            <FormLabel>{title}</FormLabel>
            <Select
                size="sm"
                placeholder={`Filter by ${title}`}
                value={value}
                onChange={(e, newValue) => handleFilterChange(newValue)}
                {...(value && {
                    // display the button and remove select indicator
                    // when user has selected a value
                    endDecorator: (
                        <IconButton
                            sx={{
                                "--IconButton-size": "20px",
                            }}
                            variant="soft"
                            color="neutral"
                            onMouseDown={(event) => {
                                // don't open the popup when clicking on this button
                                event.stopPropagation();
                            }}
                            onClick={() => {
                                handleFilterChange(null);
                                action.current?.focusVisible();
                            }}
                        >
                            <CloseRounded fontSize='small' />
                        </IconButton>
                    ),
                    indicator: null,
                })}
                indicator={<KeyboardArrowDown />}
                sx={{
                    minWidth: 160,
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                }}
            >
                {children}
            </Select>
        </FormControl>
    )
}
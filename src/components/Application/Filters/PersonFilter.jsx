import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import Typography from '@mui/joy/Typography';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export const PersonFilter = (props) => {
    const { persons, title, size, onInputChange } = props;

    return (
        <FormControl size={size} sx={{
            width: {
                md: 'auto',
                xs: '100%',
            }
        }}>
            <FormLabel>{title}</FormLabel>
            <Autocomplete
                sx={{ minWidth: 260 }}
                onInputChange={onInputChange}
                placeholder={`Filter by ${title}`}
                options={persons}
                getOptionLabel={(persons) => persons.name}
                renderOption={(props, persons, { inputValue }) => {
                    const matches = match(persons.name, inputValue);
                    const parts = parse(persons.name, matches);

                    return (
                        <AutocompleteOption {...props}>
                            <Typography level="inherit">
                                {persons.name === inputValue
                                    ? persons.name
                                    : parts.map((part, index) => (
                                        <Typography
                                            key={index}
                                            {...(part.highlight && {
                                                variant: 'soft',
                                                color: 'primary',
                                                fontWeight: 'lg',
                                                px: '2px',
                                            })}
                                        >
                                            {part.text}
                                        </Typography>
                                    ))}
                            </Typography>
                        </AutocompleteOption>
                    );
                }}
            />
        </FormControl>
    );
};
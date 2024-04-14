import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import PropTypes from "prop-types";

export const PersonAvatarDisplay = ({person}) => {

    const formatNameForAvatar = (name) => {
        return name
            .split(' ')
            .map(name => name.charAt(0).toUpperCase())
            .join('');
    }

    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
        >
            <Avatar size="sm" variant="soft">{formatNameForAvatar(person.name)}</Avatar>

            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
            >
                <Typography level="body-sm">{person.name}</Typography>
                <Typography level="body-xs">{person.email}</Typography>
            </Stack>
        </Stack>
    )
}

PersonAvatarDisplay.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};
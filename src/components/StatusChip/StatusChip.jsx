import {BlockRounded, CancelRounded, CheckRounded, CreateRounded, SendRounded} from "@mui/icons-material";
import Chip from "@mui/joy/Chip";
import * as React from "react";
import PropTypes from "prop-types";

const StatusChip = ({ variant = 'soft', size='sm', status, sx }) => {
    const decorators = {
        Opened: <CreateRounded/>,
        Sent: <SendRounded/>,
        Cancelled: <CancelRounded/>,
        Rejected: <BlockRounded/>,
        Approved: <CheckRounded/>,
    };

    const colors = {
        Opened: 'neutral',
        Sent: 'primary',
        Cancelled: 'warning',
        Rejected: 'danger',
        Approved: 'success',
    };

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const statusKey = capitalizeFirstLetter(status);

    return (
        <Chip
            startDecorator={
                decorators[statusKey]
            }
            color={
                colors[statusKey]
            }
            size={size}
            variant={variant}
            sx={sx}
        >
            {statusKey}
        </Chip>
    )
}

StatusChip.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['plain', 'outlined', 'soft', 'solid']),
    status: PropTypes.oneOf(['Created', 'Send', 'Cancelled', 'Rejected', 'Accepted']).isRequired,
    sx: PropTypes.object, // Optional custom styling
};

export default StatusChip;
import * as React from "react";
import Box from "@mui/joy/Box";

function Toggler({
                     defaultExpanded = false,
                     renderToggle,
                     children,
                 }) {
    const [open, setOpen] = React.useState(defaultExpanded);

    return (
        React.createElement(React.Fragment, null,
            renderToggle({ open, setOpen }),
            React.createElement(Box, {
                    sx: {
                        display: 'grid',
                        gridTemplateRows: open ? '1fr' : '0fr',
                        transition: '0.2s ease',
                        '& > *': {
                            overflow: 'hidden',
                        },
                    }
                },
                children
            )
        )
    );
}

export default Toggler;
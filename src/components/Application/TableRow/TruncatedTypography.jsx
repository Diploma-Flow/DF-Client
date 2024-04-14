import {Tooltip} from "@mui/joy";
import * as React from "react";
import Typography from "@mui/joy/Typography";

export const TruncatedTypography = ({maxTitleLength, title}) => {
    const shouldTruncate = title.length > maxTitleLength;

    return (
        <>
            {shouldTruncate ? (
                <Tooltip title={title} size="sm" variant="soft" arrow placement="bottom-end" sx={{maxWidth: '200px'}}>
                    <td>
                        <Typography level="body-sm">
                            {title.substring(0, maxTitleLength) + '...'}
                        </Typography>
                    </td>
                </Tooltip>
            ):(
                <td>
                    <Typography level="body-sm">
                        {title}
                    </Typography>
                </td>
            )}
        </>
    )
}
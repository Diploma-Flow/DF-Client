import {Tooltip} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import {MoreVertRounded} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";

export const VertDotsButton = ({to}) => {
    return (
        <Tooltip
            color="neutral"
            placement="left"
            variant="outlined"
            title="More.."
            arrow={true}
            size="sm"
        >
            <IconButton component={RouterLink} variant="plain" size="sm" to={to} sx={{textDecoration: 'none'}}>
                <MoreVertRounded/>
            </IconButton>
        </Tooltip>
    );
}
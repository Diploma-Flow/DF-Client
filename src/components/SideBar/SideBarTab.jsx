import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import ListItem from "@mui/joy/ListItem";
import * as React from "react";
import {Link as RouterLink} from "react-router-dom";

export const SideBarTab = ({ title, to, selected, startDecorator, endDecorator, selectCallback }) => {
    return (
        <ListItem component={RouterLink} to={to} sx={{textDecoration: 'none'}}>
            <ListItemButton selected={(selected === title) || false} onClick={()=>{selectCallback(title)}}>
                {startDecorator}
                <ListItemContent>
                    <Typography level="title-sm">{title || 'N/A'}</Typography>
                </ListItemContent>
                {endDecorator}
            </ListItemButton>
        </ListItem>
    )
}
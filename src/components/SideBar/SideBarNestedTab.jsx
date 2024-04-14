import Toggler from "./Toggler";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItem from "@mui/joy/ListItem";
import * as React from "react";

export const SideBarNestedTab = ({ title, selected, startDecorator, children, selectCallback}) => {
    return (
        <ListItem nested onClick={() => {
            selectCallback(title);
        }}>
            <Toggler
                renderToggle={({open, setOpen}) => (
                    <ListItemButton
                        onClick={() => {
                            setOpen(!open);
                        }}
                        selected={(selected === title) || false}>
                        {startDecorator}
                        <ListItemContent>
                            <Typography level="title-sm">{title}</Typography>
                        </ListItemContent>
                        <KeyboardArrowDownIcon
                            sx={{transition: '0.2s', transform: open ? 'rotate(180deg)' : 'none'}}
                        />
                    </ListItemButton>
                )}
            >
                {children}
            </Toggler>
        </ListItem>
    )
}
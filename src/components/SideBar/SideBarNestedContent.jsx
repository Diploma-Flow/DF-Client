import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import {Link as RouterLink} from "react-router-dom";

export const SideBarNestedContent = ({ items, basePath }) => {
    return (
        <List sx={{ gap: 0.5 }}>
            {items.map((item, index) => (
                <ListItem
                    key={item.title}
                    component={RouterLink}
                    to={`${basePath}${item?.to || ''}`}
                    sx={index === 0 ? { mt: 0.5, textDecoration: 'none' } : { textDecoration: 'none' }}
                >
                    <ListItemButton>{item.title}</ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import {ArrowBackIosNewRounded, CircleRounded, MoreVertRounded, PhoneInTalkRounded} from "@mui/icons-material";
import {toggleMessagesPane} from "../../utils/MessagePaneUtil";
import {toggleSidebar} from "../../utils/SideBarUtil";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

export const MessagesPaneHeader = (props) => {
    const { sender } = props;
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.body',
            }}
            py={{ xs: 2, md: 2 }}
            px={{ xs: 1, md: 2 }}
        >
            <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
                <IconButton
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{
                        display: { xs: 'inline-flex', sm: 'none' },
                    }}
                    onClick={() => toggleMessagesPane()}
                >
                    <ArrowBackIosNewRounded />
                </IconButton>
                <Avatar size="lg" src={sender.avatar} />
                <div>
                    <Typography
                        fontWeight="lg"
                        fontSize="lg"
                        component="h2"
                        noWrap
                        endDecorator={
                            sender.online ? (
                                <Chip
                                    variant="outlined"
                                    size="sm"
                                    color="neutral"
                                    sx={{
                                        borderRadius: 'sm',
                                    }}
                                    startDecorator={
                                        <CircleRounded sx={{ fontSize: 8 }} color="success" />
                                    }
                                    slotProps={{ root: { component: 'span' } }}
                                >
                                    Online
                                </Chip>
                            ) : undefined
                        }
                    >
                        {sender.name}
                    </Typography>
                    <Typography level="body-sm">{sender.username}</Typography>
                </div>
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center">
                <Button
                    startDecorator={<PhoneInTalkRounded />}
                    color="neutral"
                    variant="outlined"
                    size="sm"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                    }}
                >
                    Call
                </Button>
                <Button
                    color="neutral"
                    variant="outlined"
                    size="sm"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                    }}
                >
                    View profile
                </Button>
                <IconButton size="sm" variant="plain" color="neutral">
                    <MoreVertRounded />
                </IconButton>
            </Stack>
        </Stack>
    );
}
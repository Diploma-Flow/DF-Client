import {Box, Sheet} from "@mui/joy";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import {EditNoteRounded, SearchRounded} from "@mui/icons-material";
import {toggleMessagesPane} from "../../utils/MessagePaneUtil";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Input from "@mui/joy/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import List from "@mui/joy/List";
import CloseRounded from "@mui/icons-material/CloseRounded";
import {ChatListItem} from "./ChatListItem";

export const ChatsPane = (props) => {
    const { chats, setSelectedChat, selectedChatId } = props;
    return (
        <Sheet
            sx={{
                borderRight: '1px solid',
                borderColor: 'divider',
                height: 'calc(100dvh - var(--Header-height))',
                overflowY: 'auto',
            }}
        >
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                p={2}
                pb={1.5}
            >
                <Typography
                    fontSize={{ xs: 'md', md: 'lg' }}
                    component="h1"
                    fontWeight="lg"
                    endDecorator={
                        <Chip
                            variant="soft"
                            color="primary"
                            size="md"
                            slotProps={{ root: { component: 'span' } }}
                        >
                            4
                        </Chip>
                    }
                    sx={{ mr: 'auto' }}
                >
                    Messages
                </Typography>
                <IconButton
                    variant="plain"
                    aria-label="edit"
                    color="neutral"
                    size="sm"
                    sx={{ display: { xs: 'none', sm: 'unset' } }}
                >
                    <EditNoteRounded />
                </IconButton>
                <IconButton
                    variant="plain"
                    aria-label="edit"
                    color="neutral"
                    size="sm"
                    onClick={() => {
                        toggleMessagesPane();
                    }}
                    sx={{ display: { sm: 'none' } }}
                >
                    <CloseRounded />
                </IconButton>
            </Stack>
            <Box sx={{ px: 2, pb: 1.5 }}>
                <Input
                    size="sm"
                    startDecorator={<SearchRounded />}
                    placeholder="Search"
                    aria-label="Search"
                />
            </Box>
            <List
                sx={{
                    py: 0,
                    '--ListItem-paddingY': '0.75rem',
                    '--ListItem-paddingX': '1rem',
                }}
            >
                {chats.map((chat) => (
                    <ChatListItem
                        key={chat.id}
                        {...chat}
                        setSelectedChat={setSelectedChat}
                        selectedChatId={selectedChatId}
                    />
                ))}
            </List>
        </Sheet>
    );
}
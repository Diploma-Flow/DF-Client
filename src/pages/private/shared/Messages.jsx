import {Sheet} from "@mui/joy";
import {MessagesPane} from "../../../components/Messages/MessagesPane";
import {useState} from "react";
import {chats} from "../../../utils/Data";
import {ChatsPane} from "../../../components/Messages/ChatsPane";

export const Messages = () => {
    const [selectedChat, setSelectedChat] = useState(chats[0]);

    return (
        <Sheet
            sx={{
                flex: 1,
                width: '100%',
                mx: 'auto',
                pt: { xs: 'var(--Header-height)', sm: 'var(--Header-height)' },
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'minmax(min-content, min(30%, 400px)) 1fr',
                },
            }}
        >
            <Sheet
                sx={{
                    position: { xs: 'fixed', sm: 'sticky' },
                    transform: {
                        xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
                        sm: 'none',
                    },
                    transition: 'transform 0.4s, width 0.4s',
                    zIndex: 100,
                    width: '100%',
                    top: 52,
                }}
            >
                <ChatsPane
                    chats={chats}
                    selectedChatId={selectedChat.id}
                    setSelectedChat={setSelectedChat}
                />
            </Sheet>
            <MessagesPane chat={selectedChat} />
        </Sheet>
    )
}
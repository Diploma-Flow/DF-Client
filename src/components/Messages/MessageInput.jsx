import {Box, FormControl, Textarea} from "@mui/joy";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import {
    EmojiEmotionsRounded,
    FormatBoldRounded,
    FormatItalicRounded,
    FormatListBulletedRounded,
    SendRounded,
    StrikethroughSRounded
} from "@mui/icons-material";
import Button from "@mui/joy/Button";
import {useRef} from "react";

export const MessageInput = (props) => {
    const { textAreaValue, setTextAreaValue, onSubmit } = props;
    const textAreaRef = useRef(null);
    const handleClick = () => {
        if (textAreaValue.trim() !== '') {
            onSubmit();
            setTextAreaValue('');
        }
    };

    const sendMessage = (event) => {
        event.preventDefault();
        handleClick();
    }

    return (
        <Box sx={{ px: 2, pb: 3 }}>
            <form onSubmit={sendMessage}>
                <FormControl>
                    <Stack
                        direction="row"
                        gap={1}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'var(--joy-palette-background-surface)',
                            borderRadius: '30px',
                            p: 1,
                            alignItems: 'center',
                            color: 'secondary',
                            border: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <IconButton size="md" sx={{
                            borderRadius: '50%',
                        }}>
                            <EmojiEmotionsRounded/>
                        </IconButton>
                        <Textarea
                            variant="plain"
                            sx={{
                                width: '100%',
                                '--Textarea-focusedThickness': '0',
                                "--Textarea-paddingInline": "0",
                            }}
                            placeholder="Type something here…"
                            aria-label="Message"
                            ref={textAreaRef}
                            maxRows={4}
                            onChange={(e) => {
                                setTextAreaValue(e.target.value);
                            }}
                            value={textAreaValue}
                            size="md"
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' && !event.shiftKey) {
                                    event.preventDefault();
                                    handleClick();
                                }
                            }}
                        />
                        <IconButton
                            variant="plain"
                            color="neutral"
                            sx={{
                                size: 'md',
                                alignSelf: 'center',
                                borderRadius: 'sm',
                                borderBottomRightRadius: "20px",
                                borderTopRightRadius: "20px",
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    backgroundColor: 'var(--joy-palette-primary-main)',
                                    color: 'var(--joy-palette-text-primary)',
                                    transform: 'scale(1.1)',
                                },
                                '&:active': {
                                    backgroundColor: 'var(--joy-palette-primary-main)',
                                    color: 'var(--joy-palette-text-primary)',
                                    transform: 'scale(0.95)',
                                },
                            }}
                            type="submit"
                        >
                            <SendRounded/>
                        </IconButton>
                    </Stack>
                </FormControl>
            </form>
        </Box>
    );
}
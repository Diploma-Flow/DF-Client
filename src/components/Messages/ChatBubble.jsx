import {useState} from "react";
import {Badge, Box, Sheet} from "@mui/joy";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import {CelebrationOutlined, FavoriteBorderRounded, InsertDriveFileRounded} from "@mui/icons-material";
import IconButton from "@mui/joy/IconButton";

export const ChatBubble = (props) => {
    const { content, variant, timestamp, attachment = undefined, sender } = props;
    const isSent = variant === 'sent';
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isCelebrated, setIsCelebrated] = useState(false);
    return (
        <Box sx={{ maxWidth: '60%', minWidth: 'auto' }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{ mb: 0.25 }}
            >
                <Typography level="body-xs">
                    {sender === 'You' ? sender : sender.name}
                </Typography>
                <Typography level="body-xs">{timestamp}</Typography>
            </Stack>
            {attachment ? (
                <Sheet
                    variant="outlined"
                    sx={{
                        px: 1.75,
                        py: 1.25,
                        border: 0,
                        borderRadius: 'lg',
                        borderTopRightRadius: isSent ? 0 : 'lg',
                        borderTopLeftRadius: isSent ? 'lg' : 0,
                        backgroundColor: isSent
                            ? 'var(--joy-palette-primary-solidBg)'
                            : 'background.level1',
                    }}
                >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                        <IconButton size="md" variant="outlined">
                            <InsertDriveFileRounded/>
                        </IconButton>
                        <div>
                            <Typography fontSize="sm">{attachment.fileName}</Typography>
                            <Typography level="body-sm">{attachment.size}</Typography>
                        </div>
                    </Stack>
                </Sheet>
            ) : (
                <Box
                    sx={{ position: 'relative' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                        <Sheet
                            color={isSent ? 'primary' : 'neutral'}
                            variant={isSent ? 'solid' : 'soft'}
                            sx={{
                                p: 1.25,
                                borderRadius: 'lg',
                                borderTopRightRadius: isSent ? 0 : 'lg',
                                borderTopLeftRadius: isSent ? 'lg' : 0,
                                backgroundColor: isSent
                                    ? 'var(--joy-palette-primary-solidBg)'
                                    : 'background.level1',
                            }}
                        >
                            <Typography
                                level="body-sm"
                                sx={{
                                    color: isSent
                                        ? 'var(--joy-palette-common-white)'
                                        : 'var(--joy-palette-text-primary)',
                                }}
                            >
                                {content}
                            </Typography>
                        </Sheet>
                    {(isHovered || isLiked || isCelebrated) && (
                        <Stack
                            direction="row"
                            justifyContent={isSent ? 'flex-end' : 'flex-start'}
                            spacing={0.5}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                p: 1.5,
                                ...(isSent
                                    ? {
                                        left: 0,
                                        transform: 'translate(-100%, -50%)',
                                    }
                                    : {
                                        right: 0,
                                        transform: 'translate(100%, -50%)',
                                    }),
                            }}
                        >
                            <IconButton
                                variant={isLiked ? 'soft' : 'plain'}
                                color={isLiked ? 'danger' : 'neutral'}
                                size="sm"
                                onClick={() => setIsLiked((prevState) => !prevState)}
                                sx={{
                                    borderRadius: '50%',
                                }}
                            >
                                {isLiked ? '❤️' : <FavoriteBorderRounded />}
                            </IconButton>
                            <IconButton
                                variant={isCelebrated ? 'soft' : 'plain'}
                                color={isCelebrated ? 'warning' : 'neutral'}
                                size="sm"
                                onClick={() => setIsCelebrated((prevState) => !prevState)}
                                sx={{
                                    borderRadius: '50%',
                                }}
                            >
                                {isCelebrated ? '🎉' : <CelebrationOutlined />}
                            </IconButton>
                        </Stack>
                    )}
                </Box>
            )}
        </Box>
    );
}
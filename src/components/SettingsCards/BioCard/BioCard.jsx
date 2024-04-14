import {Box, CardActions, CardOverflow, FormHelperText, Snackbar, Textarea} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import EditorToolbar from "./EditorToolbar/EditorToolbar";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import * as React from "react";
import {useState} from "react";
import {CancelRounded, SaveRounded} from "@mui/icons-material";

export const BioCard = () => {
    const [snackBar, setSnackBar] = useState({
        isOpen: false,
        text: 'none',
        color: ''
    });

    const handleSnackBarClose = () => {
        setSnackBar((prev) => ({ ...prev, isOpen: false }));
    };

    const getSnackbarIcon = (color) => {
        const iconMap = {
            success: <SaveRounded />,
            danger: <CancelRounded />,
        };

        return iconMap[color] || null;
    };

    const handleSave = () => {
        setSnackBar({
            isOpen: true,
            text: "Successfully saved changes",
            color: "success",
        });
    }

    const handleCancel = () => {
        setSnackBar({
            isOpen: true,
            text: "Changes were canceled",
            color: "danger",
        });
    }

    const maxBioLength = 300;
    const [bioText, setBioText] = useState("");
    const handleChange = (event) => {
        const newText = event.target.value;
        if (newText.length > maxBioLength) {
            return;
        }

        setBioText(newText);
    };

    const remainingCharacters = maxBioLength - bioText.length;
    const isMaxBioLengthReached = remainingCharacters === 0;

    const [fontStyle, setFontStyle] = useState(
        {
            bold: false,
            italic: false,
            'line-through': false,
            bullet: false
        }
    );

    return (
        <Card>
            <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Bio</Typography>
                <Typography level="body-sm">
                    Write a short introduction to be displayed on your profile
                </Typography>
            </Box>
            <Divider />
            <Stack spacing={2} sx={{ my: 1 }}>
                <EditorToolbar handleFontChange={setFontStyle}/>
                <Textarea
                    size="sm"
                    minRows={4}
                    sx={{
                        mt: 1.5,
                        fontWeight: fontStyle.bold ? 'bold' : 'normal',
                        fontStyle: fontStyle.italic ? 'italic' : 'initial',
                        textDecoration: fontStyle['line-through'] ? 'line-through' : 'none',
                    }}
                    value={bioText}
                    onChange={handleChange}
                    maxLength={maxBioLength}
                />
                <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
                    {isMaxBioLengthReached
                        ? `The max characters reached (${maxBioLength})`
                        : `${remainingCharacters} characters left`}
                </FormHelperText>
            </Stack>
            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                    <Button size="sm" variant="outlined" onClick={handleCancel} color="neutral">
                        Cancel
                    </Button>
                    <Button size="sm" variant="solid" onClick={handleSave}>
                        Save
                    </Button>
                </CardActions>
            </CardOverflow>
            <Snackbar
                autoHideDuration={3000}
                color={snackBar.color}
                size="md"
                variant="outlined"
                open={snackBar.isOpen}
                onClose={handleSnackBarClose}
                startDecorator={getSnackbarIcon(snackBar.color)}
            >
                {snackBar.text}
            </Snackbar>
        </Card>
    )
}
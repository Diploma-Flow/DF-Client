import {Box, CardActions, CardOverflow, FormHelperText, Snackbar, Textarea} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import EditorToolbar from "../BioCard/EditorToolbar/EditorToolbar";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import * as React from "react";
import {SwitchControl} from "../../SwitchControl";
import {useSystemSetting} from "../../../context/SystemSettingContext";

export const SystemSettingsCard = () => {
    const {breadcrumbsVisibility, setBreadcrumbsVisibility,
        statusVisibility, setStatusVisibility} = useSystemSetting();

    return (
        <Card>
            <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Settings</Typography>
                <Typography level="body-sm">
                    The Settings Page provides users with the flexibility to customize their experience.
                    Tailor your preferences, control the visibility of elements, and fine-tune system options.
                    From toggling breadcrumbs to managing status displays, the Settings Page empowers users to
                    configure the platform according to their needs, ensuring a personalized and efficient user experience.
                    The settings are persistent and will stay the same even after refresh.
                </Typography>
            </Box>
            <Divider />
            <Stack spacing={2} sx={{ my: 1 }} gap={1.5}>
                <SwitchControl
                    label="Breadcrumbs"
                    description="Toggles the visibility of the breadcrumbs on every page"
                    callback={setBreadcrumbsVisibility}
                    checked={breadcrumbsVisibility}
                />
                <SwitchControl
                    label="Status"
                    description="Toggles the visibility of the status chip for the type of user"
                    callback={setStatusVisibility}
                    checked={statusVisibility}
                />
            </Stack>
        </Card>
    )
}
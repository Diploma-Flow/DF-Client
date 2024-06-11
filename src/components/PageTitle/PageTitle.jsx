import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import {useState} from "react";
import Stack from "@mui/joy/Stack";
import {Box} from "@mui/joy";
import {useSystemSetting} from "../../context/SystemSettingContext";
import {useAuthContext} from "../../hooks/useAuthContext";

export const PageTitle = (props) => {
    const {title = "No title", level = "h2", component = "h1", mb = 2} = props;
    const {statusVisibility} = useSystemSetting();
    const { user: { role } } = useAuthContext();

    return (
        <Stack direction="row" mb={mb} alignItems="center">
            <Typography level={level} component={component}>
                {title}
            </Typography>
            {statusVisibility &&
                (<Box>
                        <Chip
                            color="primary"
                            variant="outlined"
                            sx={{
                                marginLeft: 1
                            }}
                        >
                            {role}
                        </Chip>
                    </Box>
                )
            }
        </Stack>
    )
}
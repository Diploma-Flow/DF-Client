import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import {useState} from "react";
import Stack from "@mui/joy/Stack";
import {Box} from "@mui/joy";
import {useSystemSetting} from "../../context/SystemSettingContext";

export const PageTitle = (props) => {
    const [profileType, setProfileType] = useState('student');
    const {title = "No title", level = "h2", component = "h1", mb = 2} = props;
    const {statusVisibility} = useSystemSetting();

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
                            {profileType}
                        </Chip>
                    </Box>
                )
            }
        </Stack>
    )
}
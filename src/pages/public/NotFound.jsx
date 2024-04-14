import {Box} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import {useNavigate} from "react-router-dom";
import Card from "@mui/joy/Card";
import {FlipToBack} from "@mui/icons-material";

function NotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box component="main"
             sx={{display: 'flex', minHeight: '100dvh', justifyContent: 'center', alignItems: 'center'}}>
            <Card variant="outlined" sx={{maxWidth: 400}}>
                <Typography level="h1" sx={{mb: 0.5}}>404</Typography>
                <Typography level="h2" fontSize="xl">
                    Page Not Found
                </Typography>
                <Typography>
                    The page you are looking for might have been moved, renamed, or does not exist.
                    Please check the URL or navigate back to the home page.
                </Typography>
                <Button
                    color="primary"
                    size="md"
                    variant="outlined"
                    startDecorator={<FlipToBack/>}
                    onClick={goBack}
                >
                    Go back
                </Button>
            </Card>
        </Box>
    );
}

export default NotFound;
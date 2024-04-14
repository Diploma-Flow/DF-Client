import {Box} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import {Link as RouterLink} from "react-router-dom";
import Card from "@mui/joy/Card";
import {LoginRounded} from "@mui/icons-material";

function Unauthorized() {
    return (
        <Box component="main"
             sx={{display: 'flex', minHeight: '100dvh', justifyContent: 'center', alignItems: 'center'}}>
            <Card variant="outlined" sx={{maxWidth: 400}}>
                <Typography level="h1" sx={{mb: 0.5}}>401</Typography>
                <Typography level="h2" fontSize="xl">
                    Unauthorized
                </Typography>
                <Typography>
                    You are trying to access a secure area that requires authentication.
                    Please log in or create an account to proceed.
                </Typography>
                <Button
                    component={RouterLink}
                    to="/login"
                    color="primary"
                    size="md"
                    variant="outlined"
                    startDecorator={<LoginRounded/>}
                >
                    Go to Login
                </Button>
            </Card>
        </Box>
    );
}

export default Unauthorized;
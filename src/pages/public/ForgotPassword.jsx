import {Box, FormControl, FormLabel, Sheet} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import {EmailRounded, ForwardToInboxRounded, SchoolRounded,} from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import ColorSchemeToggle from "../../components/ToggleThemeMode/ColorSchemeToggle";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import * as React from "react";
import {useNavigate} from "react-router-dom";

function ForgotPassword(){
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const data = {
            email: formElements.email.value,
        };
        alert(JSON.stringify(data, null, 2));

        //TODO Navigate to login page if the user email is valid
        navigate('/');
    };

    return (<Sheet
        component="main"
        sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh', minWidth: '360px'
        }}>
        <Sheet color="primary" variant="outlined" sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: {
                xs: 360, sm: 450, md: 500, lg: 600,
            }, transition: 'width 0.4s', minHeight: '90dvh', borderRadius: '16px', px: 2
        }}>
            <Sheet class="header" sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                py: 3
            }}>
                <Sheet sx={{
                    display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1
                }}>
                    <IconButton variant="soft" color="primary" size="sm">
                        <SchoolRounded/>
                    </IconButton>
                    <Typography level="title-lg">Diploma FLow</Typography>
                </Sheet>
                <ColorSchemeToggle sx={{ml: 'auto'}}/>
            </Sheet>
            <Sheet class="form" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                py: 1,
                width: {
                    xs: 260, sm: 280, md: 320, lg: 380,
                },
                transition: 'width 0.4s'
            }}>
                <Typography level="h3" marginY={1}>Reset password</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '100%',
                    gap: 0.5
                }}>
                    <Typography level="body-sm">
                        Type your email address and we will send you a link to reset your password.
                    </Typography>
                </Box>
                <Box component="form" onSubmit={handleFormSubmit} sx={{width: '100%', mt: 2, mb: 4}}>
                    <FormControl sx={{width: '100%', mb: 2}}>
                        <FormLabel>Email</FormLabel>
                        <Input startDecorator={<EmailRounded/>}
                               type="email"
                               name="email"
                               placeholder="your_email@edu.com"
                               autocomplete="username"
                               required/>
                    </FormControl>
                    <Button startDecorator={<ForwardToInboxRounded/>} variant="solid" color="primary" size="sm"
                            type="submit" fullWidth>Send</Button>
                </Box>
            </Sheet>
            <Sheet class="footer" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', py: 3
            }}>
                <Typography level="body-sm" sx={{textAlign: 'center'}}>© Diploma Flow 2023</Typography>
            </Sheet>
        </Sheet>
    </Sheet>)
}

export default ForgotPassword;
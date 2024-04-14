import {Alert, Box, Checkbox, FormControl, FormLabel, Sheet} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import {EmailRounded, Key, LoginOutlined, SchoolRounded, WarningRounded} from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import ColorSchemeToggle from "../../components/ToggleThemeMode/ColorSchemeToggle";
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/joy/Button";
import GoogleIcon from "../../assets/svg/GoogleIcon";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import * as React from "react";
import {useState} from "react";
import PasswordMeterInput from "../../components/PasswordMeterInput/PasswordMeterInput";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Register() {
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const data = {
            email: formElements.email.value,
            password: formElements.password.value,
            persistent: formElements.persistent.checked,
        };
        alert(JSON.stringify(data, null, 2));
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
            {showAlert && (
                <Alert
                    startDecorator={<WarningRounded />}
                    variant="outlined"
                    color="danger"
                    endDecorator={
                        <React.Fragment>
                            <IconButton variant="soft" size="sm" color="danger" onClick={()=>setShowAlert(false)}>
                                <CloseRoundedIcon/>
                            </IconButton>
                        </React.Fragment>
                    }
                >
                    {errorMessage}
                </Alert>
            )}
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
            <Typography level="h3" marginY={1}>Sign up</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                gap: 0.5
            }}>
                <Typography level="body-sm">
                    Already have account?
                </Typography>
                <Typography level="body-sm" component={RouterLink} to="/login" color="primary">Sign in!</Typography>
            </Box>
            <Button startDecorator={<GoogleIcon/>} variant="soft" color="neutral" size="sm" sx={{mt: 4, mb: 3.5}}
                    fullWidth>Sign up
                with Google</Button>
            <Divider>or</Divider>
            <Box component="form" onSubmit={handleFormSubmit} sx={{width: '100%', mt: 2, mb: 4}}>
                <FormControl sx={{width: '100%', mb: 1.5}}>
                    <FormLabel>Email</FormLabel>
                    <Input startDecorator={<EmailRounded/>} type="email" name="email" placeholder="john@edu.com"
                           autocomplete="username" required/>
                    {/*<FormHelperText>Please provide a valid email</FormHelperText>*/}
                </FormControl>
                <FormControl sx={{width: '100%'}}>
                    <FormLabel>Password</FormLabel>
                    <PasswordMeterInput type="password"
                                        name="password"
                                        placeholder="Example@1234"
                                        startDecorator={<Key/>}
                                        autoComplete="current-password"
                                        required/>
                </FormControl>
                <Sheet sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    mt: 1.5,
                    mb: 5
                }}>
                    <Checkbox
                        color="neutral"
                        label="Remember me"
                        size="sm"
                        variant="outlined"
                        name="persistent"
                    />
                </Sheet>
                <Button startDecorator={<LoginOutlined/>} variant="solid" color="primary" size="sm"
                        type="submit" fullWidth>Sign up</Button>
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

export default Register;
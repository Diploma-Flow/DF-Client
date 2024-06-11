import {Alert, Box, Checkbox, CircularProgress, FormControl, FormLabel, Sheet} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import {
    EmailRounded,
    Key,
    LoginOutlined,
    SchoolRounded,
    VisibilityOffRounded,
    VisibilityRounded, WarningRounded
} from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import {useEffect, useState} from "react";
import ColorSchemeToggle from "../../components/ToggleThemeMode/ColorSchemeToggle";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/joy/Button";
import GoogleIcon from "../../assets/svg/GoogleIcon";
import {useLogin} from "../../hooks/useLogin";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {ButtonLoader} from "../../components/LoaderButton/ButtonLoader";

function Login() {
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {login, error, isLoading} = useLogin();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formElements = event.currentTarget.elements;
        const loginRequest = {
            email: formElements.email.value,
            password: formElements.password.value,
        };

        login(loginRequest);
    };

    useEffect(() => {
        if (error) {
            setErrorMessage(error);
            setShowAlert(true);
        }
    }, [error]);

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
                {showAlert && (<Alert
                    startDecorator={<WarningRounded/>}
                    variant="plain"
                    color="danger"
                    endDecorator={<React.Fragment>
                        <IconButton variant="plain" size="sm" color="danger" onClick={() => setShowAlert(false)}>
                            <CloseRoundedIcon/>
                        </IconButton>
                    </React.Fragment>}
                >
                    {errorMessage}
                </Alert>)}
                <Typography level="h3" marginY={1}>Sign in</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '100%',
                    gap: 0.5
                }}>
                    <Typography level="body-sm">
                        New to the system?
                    </Typography>
                    <Typography level="body-sm" component={RouterLink} to="/register" color="primary">Sign up!</Typography>
                </Box>
                <Button startDecorator={<GoogleIcon/>} variant="soft" color="neutral" size="sm" sx={{mt: 4, mb: 3.5}} fullWidth>Continue
                    with Google</Button>
                <Divider>or</Divider>
                <Box component="form" onSubmit={handleFormSubmit} sx={{width: '100%', mt: 2, mb: 4}}>
                    <FormControl sx={{width: '100%', mb: 1.5}}>
                        <FormLabel>Email</FormLabel>
                        <Input startDecorator={<EmailRounded/>}
                               type="email"
                               name="email"
                               placeholder="john@edu.com"
                               autoComplete="username"
                               required/>
                        {/*<FormHelperText>Please provide a valid email</FormHelperText>*/}
                    </FormControl>
                    <FormControl sx={{width: '100%'}}>
                        <FormLabel>Password</FormLabel>
                        <Input startDecorator={<Key/>}
                               endDecorator={showPassword ?
                                   <VisibilityRounded cursor="pointer" onClick={togglePasswordVisibility}/> :
                                   <VisibilityOffRounded cursor="pointer" onClick={togglePasswordVisibility}/>}
                               type={showPassword ? 'text' : 'password'}
                               name="password"
                               placeholder="Example@1234"
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
                        <Typography level="body-sm" component={RouterLink} to="/forgot-password">Forgot password?</Typography>
                    </Sheet>
                    {/*{!isLoading ? (<Button startDecorator={<LoginOutlined/>} variant="solid" color="primary" size="sm"*/}
                    {/*        type="submit" fullWidth>Sign in</Button>*/}
                    {/*) : (*/}
                    {/*<Button variant="solid" color="primary" size="sm"*/}
                    {/*        type="submit" fullWidth>*/}
                    {/*    <CircularProgress*/}
                    {/*        color="neutral"*/}
                    {/*        determinate={false}*/}
                    {/*        size="sm"*/}
                    {/*        value={25}*/}
                    {/*        variant="plain"*/}
                    {/*    />*/}
                    {/*</Button>*/}
                    {/*)}*/}

                    <ButtonLoader text="Sign in" type="submit" isLoading={isLoading}/>
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

export default Login;
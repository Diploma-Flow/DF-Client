import {Box, CardContent, FormControl, FormLabel, Grid, Option, Select, Skeleton} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Avatar from "@mui/joy/Avatar";
import IconButton from "@mui/joy/IconButton";
import {CalendarMonthRounded, EditRounded, EmailRounded, MaleRounded} from "@mui/icons-material";
import Input from "@mui/joy/Input";
import Card from "@mui/joy/Card";
import * as React from "react";
import {useState} from "react";

export const PersonalCard = () => {
    const [loading, setLoading] = useState(true);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
                <Card variant="outlined">
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Personal info</Typography>
                        <Typography level="body-sm">
                            Customize how your profile information will appear to the networks.
                        </Typography>
                    </Box>
                    <Divider />
                    <CardContent>
                        <Box component='div' sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: {xs:'center', sm: 'flex-start'},
                            alignItems: 'flex-start',
                            gap: 3,
                            mb: 2,
                            flexWrap: 'wrap',
                            '&>div': {
                            width: {xs:'100%', sm: 'auto'}
                            }
                        }}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Avatar sx={{ width: 150, height: 150 }} >
                                    <Skeleton loading={loading} animation="wave"/>
                                    <img
                                        src="https://i.pravatar.cc/150"
                                        alt="User Avatar"
                                        onLoad={() => setLoading(false)}
                                        style={{ display: loading ? 'none' : 'block' }}
                                    />
                                </Avatar>
                                <IconButton
                                    aria-label="upload new picture"
                                    size="sm"
                                    variant="outlined"
                                    color="neutral"
                                    sx={{
                                        zIndex: 200,
                                        bgcolor: 'background.body',
                                        borderRadius: '50%',
                                        boxShadow: 'sm',
                                        transform: 'translate(60px, 45px)',
                                        position: 'absolute',
                                    }}
                                >
                                    <EditRounded />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minHeight: '150px'}}>
                                <FormControl>
                                    <FormLabel>First name</FormLabel>
                                    <Input size="sm" placeholder="First name" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Middle name</FormLabel>
                                    <Input size="sm" placeholder="Middle name" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Last name</FormLabel>
                                    <Input size="sm" placeholder="Last name" />
                                </FormControl>
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, minHeight: '150px'}}>
                                <FormControl>
                                    <FormLabel>Date of birth</FormLabel>
                                    <Input disabled={true} size="sm" defaultValue="01/11/2001" startDecorator={<CalendarMonthRounded/>}/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRounded/>}
                                        placeholder="email"
                                        defaultValue="siriwatk@test.com"
                                        sx={{flexGrow: 1}}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Gender</FormLabel>
                                    <Select
                                        color="neutral"
                                        placeholder="Choose one…"
                                        size="sm"
                                        variant="outlined"
                                        startDecorator={<MaleRounded/>}
                                    >
                                        <Option name={'male'} value='male'>Male</Option>
                                        <Option name={'female'} value='female'>Female</Option>
                                        <Option name={'other'} value='other'>Other..</Option>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                <Card variant="outlined">
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Account info</Typography>
                        <Typography level="body-sm">
                            Customize how your profile information will appear to the networks.
                        </Typography>
                    </Box>
                    <Divider />
                    <CardContent>
                        <FormControl sx={{width: '100%', mb: 1.5}} orientation='horizontal'>
                            <FormLabel>Username</FormLabel>
                            <Input size="sm"
                                   type="username"
                                   name="username"
                                   placeholder="Username"
                                   autocomplete="username"
                                   variant="plain"
                                   disabled={true}
                                   value='simo.popov02'
                            />
                        </FormControl>
                        <FormControl sx={{width: '100%', mb: 1.5}} orientation='horizontal'>
                            <FormLabel>Password</FormLabel>
                            <Input size="sm"
                                   type="password"
                                   name="password"
                                   placeholder="Password"
                                   autocomplete="password"
                                   variant="plain"
                                   disabled={true}
                                   value='simplepass'
                            />
                        </FormControl>
                        <FormControl sx={{width: '100%', mb: 1.5}} orientation='horizontal'>
                            <FormLabel>Role</FormLabel>
                            <Input size="sm"
                                   type="text"
                                   name="role"
                                   placeholder="Role"
                                   variant="plain"
                                   disabled={true}
                                   value='Professor'
                            />
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
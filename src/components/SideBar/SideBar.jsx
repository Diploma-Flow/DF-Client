import * as React from 'react';
import {useState} from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, {listItemButtonClasses} from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ColorSchemeToggle from "../ToggleThemeMode/ColorSchemeToggle";
import {EventRounded, SchoolRounded} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";
import {Skeleton} from "@mui/joy";
import {closeSidebar} from "../../utils/SideBarUtil";
import {SideBarTab} from "./SideBarTab";
import {SideBarNestedTab} from "./SideBarNestedTab";
import {SideBarNestedContent} from "./SideBarNestedContent";
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';

export default function Sidebar() {
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState('Home');

    const handleSelect = (title) => {
        setSelected(title);
    }

    const handleLogout = () => {
        //TODO implement logout
        alert("Logout");
    }

    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: {
                    xs: 'fixed',
                    md: 'sticky',
                },
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '240px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '260px',
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <IconButton variant="soft" color="primary" size="sm">
                        <SchoolRounded/>
                    </IconButton>
                    <Typography level="title-lg">Diploma FLow</Typography>
                </Box>
                <ColorSchemeToggle sx={{ml: 'auto'}}/>
            </Box>
            <Input size="sm" startDecorator={<SearchRoundedIcon/>} placeholder="Search"/>
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    <SideBarTab
                        title="Home"
                        selected={selected}
                        selectCallback={handleSelect}
                        startDecorator={<HomeRoundedIcon/>}
                        to='/'
                    />

                    <SideBarNestedTab title="Application" startDecorator={<AssignmentTurnedInRoundedIcon/>} selected={selected} selectCallback={handleSelect}>
                        <SideBarNestedContent
                            basePath="/application"
                            items={[
                                { title: 'List all', to: '' },
                                { title: 'Create', to: '/create' },
                            ]}
                        />
                    </SideBarNestedTab>

                    <SideBarNestedTab title="Diploma" startDecorator={<AssignmentRoundedIcon/>} selected={selected} selectCallback={handleSelect}>
                        <SideBarNestedContent
                            basePath="/diploma"
                            items={[
                                { title: 'List all', to: '' },
                                { title: 'Create', to: '/create' },
                            ]}
                        />
                    </SideBarNestedTab>

                    <SideBarTab
                        title="Messages"
                        selected={selected}
                        selectCallback={handleSelect}
                        startDecorator={<QuestionAnswerRoundedIcon/>}
                        to='/messages'
                        endDecorator={
                            <Chip size="sm" color="primary" variant="solid">
                                4
                            </Chip>
                        }
                    />

                    <SideBarNestedTab title="Defending" startDecorator={<EventRounded/>} selected={selected} selectCallback={handleSelect}>
                        <SideBarNestedContent
                            basePath="/defending"
                            items={[
                                { title: 'Available dates', to: '/available-dates' },
                                { title: 'Booked', to: '/assigned' },
                            ]}
                        />
                    </SideBarNestedTab>
                </List>

                <List
                    size="sm"
                    sx={{
                        mt: 'auto',
                        flexGrow: 0,
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        '--List-gap': '8px',
                    }}
                >
                    <ListItem>
                        <ListItemButton>
                            <SupportRoundedIcon/>
                            Support
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={RouterLink} to="/my-profile" sx={{textDecoration: 'none'}}>
                        <ListItemButton>
                            <SettingsRoundedIcon/>
                            Settings
                        </ListItemButton>
                    </ListItem>
                </List>
                <Card
                    invertedColors
                    variant="soft"
                    color="warning"
                    size="sm"
                    sx={{boxShadow: 'none', display: 'none', mt: 2}}
                >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography level="title-sm">Used space</Typography>
                        <IconButton size="sm">
                            <CloseRoundedIcon/>
                        </IconButton>
                    </Stack>
                    <Typography level="body-xs">
                        Your team has used 80% of your available space. Need more?
                    </Typography>
                    <LinearProgress variant="outlined" value={80} determinate sx={{my: 1}}/>
                    <Button size="sm" variant="solid">
                        Upgrade plan
                    </Button>
                </Card>
            </Box>
            <Divider/>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box component={RouterLink}
                     sx={{display: 'flex', gap: 1, alignItems: 'center', textDecoration: 'none'}}
                     to="/my-profile"
                     cursor="pointer">
                    <Avatar variant="outlined" size="sm">
                        <Skeleton loading={loading} animation="wave"/>
                        <img
                            src="https://i.pravatar.cc/300"
                            alt="User Avatar"
                            onLoad={() => setLoading(false)}
                            style={{ display: loading ? 'none' : 'block' }}
                        />
                    </Avatar>
                    <Box sx={{minWidth: 0, flex: 1}}>
                        <Typography level="title-sm">Siriwat K.</Typography>
                        <Typography level="body-xs">siriwatk@test.com</Typography>
                    </Box>
                </Box>
                <IconButton size="sm" variant="plain" color="neutral" onClick={handleLogout}>
                    <LogoutRoundedIcon/>
                </IconButton>
            </Box>
        </Sheet>
    );
}
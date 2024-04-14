import Typography from "@mui/joy/Typography";
import {Link as RouterLink, useParams} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import {Box, Sheet, Snackbar} from "@mui/joy";
import Button from "@mui/joy/Button";
import {ArrowBackIosNewRounded, CancelRounded, SaveRounded, SettingsRounded} from "@mui/icons-material";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";
import {PersonAvatarDisplay} from "../../../../../components/Application/TableRow/PersonAvatarDisplay";
import IconButton from "@mui/joy/IconButton";
import ListItem from "@mui/joy/ListItem";
import List from "@mui/joy/List";
import StatusChip from "../../../../../components/StatusChip/StatusChip";
import {PageTitle} from "../../../../../components/PageTitle/PageTitle";

export const ApplicationDetails = () => {
    function createData(id, title, description, status, task1, task2, task3, technology1, technology2, technology3, ownerName, ownerEmail, supervisorName, supervisorEmail, dateOfCreation) {
        const tasks = { task1, task2, task3 };
        const technologies = { technology1, technology2, technology3 };
        const owner = { name: ownerName, email: ownerEmail };
        const supervisor = { name: supervisorName, email: supervisorEmail };

        return { id, title, description, status, tasks, technologies, owner, supervisor, dateOfCreation };
    }

    const applications = [
        createData(
            'AP-0001',
            'Thesis of biology',
            'A Thesis of Biology is a comprehensive academic document that explores and analyzes a specific topic within the field of biology. It represents the culmination of a student\'s in-depth research, critical thinking, and scholarly investigation. This type of diploma work typically includes a thorough review of existing literature, the formulation of a hypothesis, the design and implementation of experiments or studies, data analysis, and the presentation of findings. The goal is to contribute new insights, knowledge, or perspectives to the field of biology, demonstrating the student\'s mastery of the subject matter and research methodology. The Thesis of Biology is a significant milestone in the academic journey, showcasing the student\'s ability to engage in independent research and make meaningful contributions to the scientific community.',
            'Rejected',
            'Conduct a comprehensive literature review on the chosen topic within biology',
            'Develop a robust experimental design and collect relevant data',
            'Analyze collected data and interpret the results.',
            'Python',
            'Kubernetes',
            'Java',
            'Simeon Konstantinov Popov',
            'simeon@example.com',
            'Mihaela Kirilova',
            'mihaela@example.com',
            'Feb 3, 2023'
        ),
    ];

    const application = applications[0];

    // ============================================== MOCKED DATA ==============================================
    //get useParams from react-router-dom and print it out
    const {applicationId} = useParams();
    const [profileType, setProfileType] = useState('student');
    const [isModifiable, setIsModifiable] = useState(false);
    const [isActionButtonDisabled, setActionButtonDisabled] = useState(true);

    useEffect(() => {
        let applicationStatus = application.status.toLowerCase();
        setIsModifiable(applicationStatus !== 'send' && applicationStatus !== 'accepted');
    }, []);

    const [snackBar, setSnackBar] = useState({
        isOpen: false,
        text: 'none',
        color: ''
    });

    const handleSnackBarClose = () => {
        setSnackBar((prev) => ({ ...prev, isOpen: false }));
    };

    const getSnackbarIcon = (color) => {
        const iconMap = {
            success: <SaveRounded />,
            danger: <CancelRounded />,
        };

        return iconMap[color] || null;
    };

    const handleSave = () => {
        setSnackBar({
            isOpen: true,
            text: "Successfully saved changes",
            color: "success",
        });
        setActionButtonDisabled(true);
    }

    const handleCancel = () => {
        setSnackBar({
            isOpen: true,
            text: "Changes were canceled",
            color: "danger",
        });
        setActionButtonDisabled(true);
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 2,
                mb: 2,
            }}>
                <PageTitle title="Application details" mb={0}/>
                <Button
                    component={RouterLink}
                    to="/application"
                    sx={{textDecoration: 'none'}}
                    variant="solid"
                    startDecorator={<ArrowBackIosNewRounded/>}
                    color="primary"
                >
                    All applications
                </Button>
            </Box>
            <Sheet color="neutral"
                   variant="outlined"
                   sx={{
                       overflow: 'auto',
                       borderRadius: 'sm',
                       width: '100%',
                       flexShrink: 1,
                       minHeight: 0,
                       padding: 2,
                   }}
            >
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography textTransform="uppercase" level="h4" component="h4">
                            {application.title}
                            <StatusChip
                                status={application.status}
                                variant="outlined"
                                size="md"
                                sx={{
                                    marginLeft: 1
                                }}
                            />
                        </Typography>
                        <IconButton disabled={!isModifiable || !isActionButtonDisabled} onClick={()=>setActionButtonDisabled(false)}>
                            <SettingsRounded/>
                        </IconButton>
                    </Stack>
                    <Typography level="body-md">
                        {application.description}
                    </Typography>
                </Stack>
                <Divider sx={{
                    my: 2,
                }}/>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    spacing={2}
                    mb={2}
                    divider={
                        <Divider orientation="vertical" sx={{
                            my: 2,
                        }}/>
                    }
                >
                    <Box sx={{
                        minWidth: 'lg',
                        flex: 1,
                    }}>
                        <Typography
                            id="owner"
                            textTransform="uppercase"
                            level="h4"
                            component="h4"
                            mb={1}
                        >
                            Owner
                        </Typography>
                        <PersonAvatarDisplay person={application.owner}/>
                    </Box>
                    <Box sx={{
                        minWidth: 'lg',
                        flex: 1,
                    }}>
                        <Typography
                            id="supervisor"
                            textTransform="uppercase"
                            level="h4"
                            component="h4"
                            mb={1}
                        >
                            Supervisor
                        </Typography>
                        <PersonAvatarDisplay person={application.supervisor}/>
                    </Box>
                    <Box sx={{
                        minWidth: 'lg',
                        flex: 1,
                    }}>
                        <Typography
                            id="dateOfCreation"
                            textTransform="uppercase"
                            level="h4"
                            component="h4"
                            mb={1}
                        >
                            Date of creation
                        </Typography>
                        <Typography level="body-md">{application.dateOfCreation}</Typography>
                    </Box>
                    <Box sx={{
                        minWidth: 'lg',
                        flex: 1,
                    }}>
                        <Typography
                            id="id"
                            textTransform="uppercase"
                            level="h4"
                            component="h4"
                            mb={1}
                        >
                            Application ID
                        </Typography>
                        <Typography level="body-md">{application.id}</Typography>
                    </Box>
                </Stack>
                <Divider sx={{
                    my: 2,
                }}/>
                <Stack direction="row"
                       spacing={2}
                       mb={2}
                       divider={
                            <Divider orientation="vertical" sx={{
                            my: 2,
                            }}/>
                        }
                >
                    <Box sx={{
                        width: '100%',
                    }}>
                        <Typography
                            id="tasks"
                            textTransform="uppercase"
                            level="h4"
                            component="h4"
                        >
                            Tasks
                        </Typography>
                        <List aria-labelledby="tasks" marker="disc">
                            {Object.values(application.tasks).map((task, index) => {
                                return (
                                    <ListItem key={index}>
                                        <Typography>{task}</Typography>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                    <Box sx={{
                            width: '100%',
                        }}
                    >
                        <Typography
                            id="technologies"
                            textTransform="uppercase"
                            level="h4"
                            component="h4"
                        >
                            Tech stack
                        </Typography>
                        <List aria-labelledby="technologies" marker="disc">
                            {Object.values(application.technologies).map((technology, index) => {
                                return (
                                    <ListItem key={index}>
                                        <Typography>{technology}</Typography>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Stack>
                <Divider sx={{
                    my: 2,
                }}/>
                <Stack direction="row" sx={{ justifyContent: 'flex-end' ,alignItems: 'flex-end', pt: 2, gap: 1 }}>
                    <Button size="sm" variant="outlined" onClick={handleCancel} color="neutral" disabled={isActionButtonDisabled}>
                        Cancel
                    </Button>
                    <Button size="sm" variant="solid" onClick={handleSave} disabled={isActionButtonDisabled}>
                        Save
                    </Button>
                </Stack>
            </Sheet>
            <Snackbar
                autoHideDuration={3000}
                color={snackBar.color}
                size="md"
                variant="outlined"
                open={snackBar.isOpen}
                onClose={handleSnackBarClose}
                startDecorator={getSnackbarIcon(snackBar.color)}
            >
                {snackBar.text}
            </Snackbar>
        </>
    )
}
import Typography from "@mui/joy/Typography";
import {Tab, tabClasses, TabList, TabPanel, Tabs} from "@mui/joy";
import Chip from "@mui/joy/Chip";
import {useState} from "react";
import {BioCard} from "../../../components/SettingsCards/BioCard/BioCard";
import {LogHistoryCard} from "../../../components/SettingsCards/LogHistoryCard/LogHistoryCard";
import {PersonalCard} from "../../../components/SettingsCards/PersonalCard/PersonalCard";
import Button from "@mui/joy/Button";
import {useSystemSetting} from "../../../context/SystemSettingContext";
import {PageTitle} from "../../../components/PageTitle/PageTitle";
import {SystemSettingsCard} from "../../../components/SettingsCards/SystemSettingsCard/SystemSettingsCard";

function MyProfile() {

    return (<>
            <PageTitle title="My profile"/>
            <Tabs
                defaultValue={0}
                sx={{
                    bgcolor: 'transparent'
                }}
            >
                <TabList
                    tabFlex={1}
                    size="sm"
                    sx={{
                        justifyContent: 'left', [`&& .${tabClasses.root}`]: {
                            fontWeight: '600',
                            flex: 'initial',
                            color: 'text.tertiary',
                            transition: 'background-color 0.3s', // Add a smooth transition for the hover effect
                            '&:hover': {
                                backgroundColor: 'neutral.outlinedHoverBg', // Replace 'hoverColor' with your desired hover background color
                                color: 'text.primary',
                            },
                            [`&.${tabClasses.selected}`]: {
                                bgcolor: 'neutral.outlinedDisabledBorder', color: 'text.primary', '&::after': {
                                    height: '0'
                                },
                            },
                        },
                    }}
                >
                    <Tab sx={{borderRadius: '6px 6px 0 0'}} indicatorInset value={0}>
                        Personal info
                    </Tab>
                    <Tab sx={{borderRadius: '6px 6px 0 0'}} indicatorInset value={1}>
                        Bio
                    </Tab>
                    <Tab sx={{borderRadius: '6px 6px 0 0'}} indicatorInset value={2}>
                        System
                    </Tab>
                    <Tab sx={{borderRadius: '6px 6px 0 0'}} indicatorInset value={3}>
                        Log history
                    </Tab>
                </TabList>

                <TabPanel value={0} sx={{padding: 0, marginY: 2}}>
                    <PersonalCard/>
                </TabPanel>

                <TabPanel value={1} sx={{padding: 0, marginY: 2, minWidth: '340px'}}>
                    <BioCard/>
                </TabPanel>

                <TabPanel value={2} sx={{padding: 0, marginY: 2}}>
                    <SystemSettingsCard/>
                </TabPanel>

                <TabPanel value={3} sx={{padding: 0, marginY: 2}}>
                    <LogHistoryCard/>
                </TabPanel>

            </Tabs>
        </>);
}

export default MyProfile;
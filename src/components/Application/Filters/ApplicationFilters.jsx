import {Box, FormControl, FormLabel} from "@mui/joy";
import Input from "@mui/joy/Input";
import {SearchRounded} from "@mui/icons-material";
import Option from "@mui/joy/Option";
import * as React from "react";
import {SelectFilter} from "./SelectFilter";
import {PersonFilter} from "./PersonFilter";

export const ApplicationFilters = (props) => {
    const { applications, onFilterChange} = props;

    const uniqueOwners = Array.from(
        new Set(applications.map((application) => JSON.stringify(application.owner))).values(),
        (ownerString) => JSON.parse(ownerString)
    );

    const uniqueSupervisors = Array.from(
        new Set(applications.map((application) => JSON.stringify(application.supervisor))).values(),
        (ownerString) => JSON.parse(ownerString)
    );

    const handleSearchInputChange = (e) => {
        let value = e.target.value;
        onFilterChange?.(value, 'search');
    }

    const handleStatusChange = (value) => {
        onFilterChange?.(value, 'status');
    }

    const handleOwnerFilterChange = (e, value) => {
        onFilterChange?.(value, 'owner');
    }

    const handleSupervisorFilterChange = (e, value) => {
        onFilterChange?.(value, 'supervisor');
    }

    return (
        <Box className='table__fitlers'
             sx={{
                 display: 'flex',
                 justifyContent: 'flex-start',
                 alignItems: 'center',
                 flexDirection: 'row',
                 gap: 2,
                 my: 3,
                 flexWrap: 'wrap'}}>
            <FormControl sx={{ flex: 1, minWidth: 260 }} size="sm">
                <FormLabel>Search for applications</FormLabel>
                <Input size="sm" placeholder="Search" onChange={handleSearchInputChange} startDecorator={<SearchRounded />} />
            </FormControl>
            <SelectFilter title="Status" onChange={handleStatusChange}>
                <Option value="created">Created</Option>
                <Option value="send">Send</Option>
                <Option value="cancelled">Cancelled</Option>
                <Option value="rejected">Rejected</Option>
                <Option value="accepted">Accepted</Option>
            </SelectFilter>
            <PersonFilter size="sm" title="Owner" persons={uniqueOwners} onInputChange={handleOwnerFilterChange}/>
            <PersonFilter size="sm" title="Supervisor" persons={uniqueSupervisors} onInputChange={handleSupervisorFilterChange}/>
        </Box>
    )
}
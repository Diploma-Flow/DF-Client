import Typography from "@mui/joy/Typography";
import {Box, Table} from "@mui/joy";
import {Add} from "@mui/icons-material";
import Button from "@mui/joy/Button";
import * as React from "react";
import {useState} from "react";
import Sheet from "@mui/joy/Sheet";
import {ApplicationRow} from "../../../../../components/Application/TableRow/ApplicationRow";
import {ApplicationFilters} from "../../../../../components/Application/Filters/ApplicationFilters";
import {DownloadPdfButton} from "../../../../../components/DownloadButton/DawnloadPdfButton";
import {Link as RouterLink} from "react-router-dom";
import {PageTitle} from "../../../../../components/PageTitle/PageTitle";

export const ApplicationList = () => {
    const [filters, setFilters] = useState({
        search: '',
        status: '',
        owner: '',
        supervisor: '',
    });

    const handleFilterChange = (value, filterName) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    function createData(id, title, status, ownerName, ownerEmail, supervisorName, supervisorEmail, dateOfCreation) {
        const owner = { name: ownerName, email: ownerEmail };
        const supervisor = { name: supervisorName, email: supervisorEmail };

        return { id, title, status, owner, supervisor, dateOfCreation };
    }

    const applications = [
        createData('AP-0001', 'Thesis of biology', 'Created', 'Simeon Konstantinov Popov', 'simeon@example.com', 'Mihaela Kirilova', 'mihaela@example.com', 'Feb 3, 2023'),
        createData('AP-0002', 'Project Presentation', 'Send', 'John Doe', 'john@example.com', 'Jane Smith', 'jane@example.com', 'Feb 3, 2023'),
        createData('AP-00011', 'Meeting with Client', 'Cancelled', 'Peter Jones', 'peter@example.com', 'Mary Brown', 'mary@example.com', 'Feb 5, 2023'),
        createData('AP-00012', 'Design Review', 'Rejected', 'Susan Wilson', 'susan@example.com', 'David Miller', 'david@example.com', 'Feb 8, 2023'),
        createData('AP-00013', 'Wireframe Approval', 'Cancelled', 'Michael Taylor', 'michael@example.com', 'Emily Johnson', 'emily@example.com', 'Feb 10, 2023'),
        createData('AP-00014', 'Development Start', 'Rejected', 'Sarah Williams', 'sarah@example.com', 'James Davis', 'james@example.com', 'Feb 12, 2023'),
        createData('AP-00015', 'Development Progress', 'Accepted', 'David Thompson', 'david@example.com', 'Lisa Miller', 'lisa@example.com', 'Feb 15, 2023'),
        createData('AP-00016', 'Development Completion', 'Cancelled', 'Janet Brown', 'janet@example.com', 'John Smith', 'john@example.com', 'Feb 17, 2023'),
        createData('AP-00017', 'Testing Start', 'Accepted', 'Peter Jones', 'peter@example.com', 'Mary Brown', 'mary@example.com', 'Feb 20, 2023'),
        createData('AP-00018', 'Testing Progress', 'Rejected', 'Susan Wilson', 'susan@example.com', 'David Miller', 'david@example.com', 'Feb 22, 2023'),
        createData('AP-00019', 'Testing Completion', 'Send', 'Michael Taylor', 'michael@example.com', 'Emily Johnson', 'emily@example.com', 'Feb 24, 2023'),
        createData('AP-00020', 'Deployment Plan', 'Rejected', 'Sarah Williams', 'sarah@example.com', 'James Davis', 'james@example.com', 'Feb 27, 2023'),
        createData('AP-00021', 'Deployment Testing', 'Accepted', 'David Thompson', 'david@example.com', 'Lisa Miller', 'lisa@example.com', 'Mar 1, 2023'),
        createData('AP-00022', 'Deployment Approval', 'Cancelled', 'Janet Brown', 'janet@example.com', 'John Smith', 'john@example.com', 'Mar 3, 2023'),
        createData('AP-00023', 'Deployment Staging', 'Send', 'Peter Jones', 'peter@example.com', 'Mary Brown', 'mary@example.com', 'Mar 5, 2023'),
        createData('AP-00024', 'Deployment Staging Testing', 'Cancelled', 'Susan Wilson', 'susan@example.com', 'David Miller', 'david@example.com', 'Mar 7, 2023'),
        createData('AP-00025', 'Deployment Go-Live', 'Accepted', 'Michael Taylor', 'michael@example.com', 'Emily Johnson', 'emily@example.com', 'Mar 9, 2023'),
        createData('AP-00026', 'Post-Deployment Testing', 'Rejected', 'Sarah Williams', 'sarah@example.com', 'James Davis', 'james@example.com', 'Mar 11, 2023'),
        createData('AP-00027', 'Deployment Review', 'Accepted', 'David Thompson', 'david@example.com', 'Lisa Miller', 'lisa@example.com', 'Mar 13, 2023'),
        createData('AP-00028', 'Client Satisfaction Survey', 'Rejected', 'Janet Brown', 'janet@example.com', 'John Smith', 'john@example.com', 'Mar 15, 2023'),
        createData('AP-00029', 'Customer Feedback Analysis', 'Cancelled', 'Peter Jones', 'peter@example.com', 'Mary Brown', 'mary@example.com', 'Mar 17, 2023'),
        createData('AP-00030', 'Action Plan for Improvements', 'Created', 'Susan Wilson', 'susan@example.com', 'David Miller', 'david@example.com', 'Mar 19, 2023'),
        createData('AP-00031', 'Implementation of Improvement Plan', 'Accepted', 'Michael Taylor', 'michael@example.com', 'Emily Johnson', 'emily@example.com', 'Mar 21, 2023'),
        createData('AP-00032', 'Post-Implementation Review', 'Rejected', 'Sarah Williams', 'sarah@example.com', 'James Davis', 'james@example.com', 'Mar 23, 2023'),
        createData('AP-00033', 'Project Wrap-Up', 'Cancelled', 'David Thompson', 'david@example.com', 'Lisa Miller', 'lisa@example.com', 'Mar 25, 2023'),
        createData('AP-00034', 'Project Presentation to Client', 'Rejected', 'Janet Brown', 'janet@example.com', 'John Smith', 'john@example.com', 'Mar 27, 2023'),
        createData('AP-00035', 'Post-Project Feedback', 'Rejected', 'Peter Jones', 'peter@example.com', 'Mary Brown', 'mary@example.com', 'Mar 29, 2023'),
        createData('AP-00036', 'Project Closure', 'Cancelled', 'Susan Wilson', 'susan@example.com', 'David Miller', 'david@example.com', 'Apr 1, 2023'),
        createData('AP-00037', 'Project Evaluation', 'Accepted', 'Michael Taylor', 'michael@example.com', 'Emily Johnson', 'emily@example.com', 'Apr 3, 2023'),
    ];

    const filteredApplications = applications.filter((application) => {
        const { search, status, owner, supervisor } = filters;

        const titleMatch = search === '' || application.title.toLowerCase().includes(search.toLowerCase());
        const idMatch = search === '' || application.id.toLowerCase().includes(search.toLowerCase());
        const statusMatch = status === '' || application.status.toLowerCase() === status.toLowerCase();
        const ownerMatch = owner === '' || application.owner.name.toLowerCase().includes(owner.toLowerCase());
        const supervisorMatch = supervisor === '' || application.supervisor.name.toLowerCase().includes(supervisor.toLowerCase());

        // Show the application if at least one filter matches
        return (titleMatch || idMatch) && statusMatch && ownerMatch && supervisorMatch;
    });

    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', mb: 2, flexWrap: 'wrap', gap: 2}}>
                <PageTitle title="Application" mb={0}/>
                <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', gap: 2, flexWrap: 'wrap'}}>
                    <DownloadPdfButton color="primary" variant="solid" size="sm"/>
                    <Button
                        component={RouterLink}
                        to="create"
                        sx={{textDecoration: 'none'}}
                        variant="solid"
                        startDecorator={<Add />}
                        color="success"
                        size="sm"
                    >
                        New
                    </Button>
                </Box>
            </Box>
            <ApplicationFilters
                applications={applications}
                onFilterChange={handleFilterChange}
            />
            <Sheet sx={{
                overflow: 'auto',
                borderRadius: 'sm',
                width: '100%',
                flexShrink: 1,
                minHeight: 0,
                maxHeight: 'calc(100vh - 290px)',
                padding: 0}}>
                <Table
                    color="neutral"
                    size="md"
                    stickyHeader
                    variant="plain"
                    hoverRow
                    sx={{
                        borderRadius: 'sm',
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                        '--Table-bodyBackground': 'var(--joy-palette-background-level0)',
                        '--Table-lastColumnWidth': '50px',
                    }}
                >
                    <thead>
                    <tr>
                        <th style={{padding: '12px 6px 12px 12px'}}>ID</th>
                        <th style={{padding: '12px 6px'}}>Title</th>
                        <th style={{padding: '12px 6px'}}>Status</th>
                        <th style={{padding: '12px 6px'}}>Owner</th>
                        <th style={{padding: '12px 6px'}}>Supervisor</th>
                        <th style={{padding: '12px 6px'}}>Date (of creation)</th>
                        <th style={{padding: '12px 6px', width: 'var(--Table-lastColumnWidth)'}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredApplications.map((row) => (
                        <ApplicationRow key={row.id} row={row} />
                    ))}
                    </tbody>
                </Table>
            </Sheet>

        </>
    )
}
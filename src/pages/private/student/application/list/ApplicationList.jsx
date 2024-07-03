import {Box, Table} from "@mui/joy";
import {Add} from "@mui/icons-material";
import Button from "@mui/joy/Button";
import * as React from "react";
import {useEffect, useState} from "react";
import Sheet from "@mui/joy/Sheet";
import {ApplicationRow} from "../../../../../components/Application/TableRow/ApplicationRow";
import {ApplicationFilters} from "../../../../../components/Application/Filters/ApplicationFilters";
import {DownloadPdfButton} from "../../../../../components/DownloadButton/DawnloadPdfButton";
import {Link as RouterLink} from "react-router-dom";
import {PageTitle} from "../../../../../components/PageTitle/PageTitle";
import useAxios from "../../../../../hooks/useAxios";

export const ApplicationList = () => {
    const api = useAxios();
    const [applications, setApplications] = useState([]);
    const [isLastPage, setIsLastPage] = useState(false);
    const [filters, setFilters] = useState({
        search: '',
        status: '',
        owner: '',
        supervisor: '',
    });

    const handleFilterChange = (value, filterName) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    function createApplicationObject(id, title, status, ownerName, ownerEmail, supervisorName, supervisorEmail, dateOfCreation) {
        const owner = { name: ownerName, email: ownerEmail };
        const supervisor = { name: supervisorName, email: supervisorEmail };

        return { id, title, status, owner, supervisor, dateOfCreation };
    }

    const fetchApplications = () => {
        let params = {
            page: 0,
            size: 4
        }

        api.get("/diploma-management", { params })
            .then(response => {
                processResponse(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const processResponse = (data) => {
        const { content, last } = data;
        const formattedContent = content.map(item =>
            createApplicationObject(
                item.id,
                item.title,
                item.status,
                `${item.owner.firstName} ${item.owner.lastName}`,
                item.owner.email,
                `${item.supervisor.firstName} ${item.supervisor.lastName}`,
                item.supervisor.email,
                formatDate(item.creationDate)
            )
        );

        setApplications(formattedContent);
        setIsLastPage(last);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const month = date.toLocaleString('default', { month: 'long' }).slice(0, 3);
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`;
    };

    useEffect(() => {
        fetchApplications();
        const interval = setInterval(fetchApplications, 20000); // 20 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

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
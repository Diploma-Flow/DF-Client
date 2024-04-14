import {getRandomDiplomas} from "../../../../../utils/MockData";
import Typography from "@mui/joy/Typography";
import {Box, Table} from "@mui/joy";
import {DownloadPdfButton} from "../../../../../components/DownloadButton/DawnloadPdfButton";
import Button from "@mui/joy/Button";
import {Link as RouterLink} from "react-router-dom";
import {Add} from "@mui/icons-material";
import * as React from "react";
import {ApplicationRow} from "../../../../../components/Application/TableRow/ApplicationRow";
import Sheet from "@mui/joy/Sheet";
import {DiplomaRow} from "../../../../../components/Diploma/TableRow/DiplomaRow";
import {ApplicationFilters} from "../../../../../components/Application/Filters/ApplicationFilters";
import {useState} from "react";
import {DiplomaFilters} from "../../../../../components/Diploma/Filters/DiplomaFilters";
import {PageTitle} from "../../../../../components/PageTitle/PageTitle";

export const DiplomaList = () => {
    const diplomas  = getRandomDiplomas(100);
    console.log(diplomas);

    const [filters, setFilters] = useState({
        search: '',
        status: '',
        owner: '',
        supervisor: '',
    });

    const handleFilterChange = (value, filterName) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    const filteredDiplomas = diplomas.filter((diploma) => {
        const { search, status, owner, supervisor } = filters;

        const titleMatch = search === '' || diploma.title.toLowerCase().includes(search.toLowerCase());
        const idMatch = search === '' || diploma.id.toLowerCase().includes(search.toLowerCase());
        const statusMatch = status === '' || diploma.status.toLowerCase() === status.toLowerCase();
        const ownerMatch = owner === '' || diploma.owner.name.toLowerCase().includes(owner.toLowerCase());
        const supervisorMatch = supervisor === '' || diploma.supervisor.name.toLowerCase().includes(supervisor.toLowerCase());

        // Show the application if at least one filter matches
        return (titleMatch || idMatch) && statusMatch && ownerMatch && supervisorMatch;
    });
    console.log(filteredDiplomas);

    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', mb: 2, flexWrap: 'wrap', gap: 2}}>
                <PageTitle title="Diploma" mb={0}/>
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
            <DiplomaFilters
                diplomas={diplomas}
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
                    noWrap
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
                        <th style={{padding: '12px 6px 12px 12px', width: '120px'}}>ID</th>
                        <th style={{padding: '12px 6px', width: '240px'}}>Title</th>
                        <th style={{padding: '12px 6px', width: '140px'}}>Status</th>
                        <th style={{padding: '12px 6px', width: '300px'}}>Owner</th>
                        <th style={{padding: '12px 6px', width: '120px'}}>Application ID</th>
                        <th style={{padding: '12px 6px', width: '300px'}}>Supervisor</th>
                        <th style={{padding: '12px 6px', width: '120px'}}>Mark</th>
                        <th style={{padding: '12px 6px'}}>Date (of creation)</th>
                        <th style={{padding: '12px 6px', width: 'var(--Table-lastColumnWidth)'}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredDiplomas.map((row) => (
                        <DiplomaRow key={row.id} row={row} />
                    ))}
                    </tbody>
                </Table>
            </Sheet>
        </>
    )
}
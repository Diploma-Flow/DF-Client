import {Box, CardContent, FormHelperText, Snackbar, Table} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import * as React from "react";
import {useState} from "react";
import Sheet from "@mui/joy/Sheet";
import {ContentCopyRounded,} from "@mui/icons-material";
import {DownloadCsvButton} from "../../DownloadButton/DawnloadCsvButton";

export const LogHistoryCard = () => {

    function createData(date, time, ip, os, browser, device) {
        return { date, time, ip, os, browser, device };
    }

    const rows = [
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
        createData('18.12.2023', '04:29', '78.154.13.134', 'Windows 10', 'Chrome 120', 'Computer'),
    ];

    const handleRowClick = (row) => {
        // Copy the row as a JSON object
        const rowJson = JSON.stringify(row);

        // Use the Clipboard API to copy the JSON to the clipboard
        navigator.clipboard.writeText(rowJson)
            .then(() => {
                console.log('Row copied to clipboard:', rowJson);
                showSnack();
            })
            .catch((error) => {
                console.error('Failed to copy to clipboard:', error);
            });
    };

    const [snackBar, setSnackBar] = useState({
        isOpen: false,
        text: 'none',
        color: ''
    });

    const handleSnackBarClose = () => {
        setSnackBar((prev) => ({ ...prev, isOpen: false }));
    };

    const showSnack = () => {
        setSnackBar({
            isOpen: true,
            text: "Copied to clipboard",
            color: "success",
        });
    }

    return (
        <>
            <Card variant="outlined">
                <CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box sx={{ mb: 1 }}>
                            <Typography level="title-md">Log History</Typography>
                            <Typography level="body-sm">
                                Here you can find information about you last sign ins
                            </Typography>
                        </Box>
                        <DownloadCsvButton resource={rows}/>
                    </Box>
                    <Sheet sx={{ height: 400, overflow: 'auto' }}>
                        <Table
                            color="neutral"
                            size="md"
                            stickyHeader
                            variant="plain"
                            hoverRow
                        >
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th style={{width: '20%'}}>IP Address</th>
                                    <th>OS</th>
                                    <th>Browser</th>
                                    <th>Device</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.name} onClick={() => handleRowClick(row)}>
                                        <td>{row.date}</td>
                                        <td>{row.time}</td>
                                        <td>{row.ip}</td>
                                        <td>{row.os}</td>
                                        <td>{row.browser}</td>
                                        <td>{row.device}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Sheet>
                    <FormHelperText sx={{ mt: 1, fontSize: 'xs' }}>
                        Click on any row to copy the data in JSON format.
                    </FormHelperText>
                </CardContent>
            </Card>
            <Snackbar
                autoHideDuration={3000}
                color={snackBar.color}
                size="md"
                variant="outlined"
                open={snackBar.isOpen}
                onClose={handleSnackBarClose}
                startDecorator={<ContentCopyRounded/>}
            >
                {snackBar.text}
            </Snackbar>
        </>
    )
}
import Button from "@mui/joy/Button";
import {CloudDownloadRounded} from "@mui/icons-material";
import {useState} from "react";

export const DownloadCsvButton = (props) => {
    const {color, sx, variant, resource, title} = props
    const [isDownloading, setIsDownloading] = useState(false);

    const generateFileName = () => {
        // Get current date and time
        const currentDate = new Date();

        // Format date and time as per your requirements
        const formattedDate = currentDate.toISOString().split('T')[0].replace(/-/g, '_');
        const formattedTime = currentDate.toTimeString().split(' ')[0].replace(/:/g, '-');

        // Create timestamp
        const timestamp = `${formattedDate}-${formattedTime}`;

        // Use the timestamp in the file name
        return `log_history_${timestamp}.csv`;
    }

    const exportToCsv = () => {
        setIsDownloading(true);

        const header = Object.keys(resource[0]).join(';');
        const csvRows = resource.map(row => Object.values(row).join(';'));

        const csvContent = [header, ...csvRows].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });

        // Simulate a 5-second delay
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = generateFileName();

            // Trigger a click event to download the file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setIsDownloading(false);
        }, 5000);
    }

    return (
        <Button
            startDecorator={<CloudDownloadRounded />}
            color={color || "primary"}
            onClick={exportToCsv}
            variant={variant || "outlined"}
            loading={isDownloading}
        >
            {title || "Export CSV"}
        </Button>
    )
}
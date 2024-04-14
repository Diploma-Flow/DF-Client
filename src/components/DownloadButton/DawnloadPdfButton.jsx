import Button from "@mui/joy/Button";
import {DownloadRounded} from "@mui/icons-material";
import {useState} from "react";

export const DownloadPdfButton = (props) => {
    const {resource, ...buttonProps} = props
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadPdf = () => {
        setIsDownloading(true);

        // Simulate a 5-second delay
        setTimeout(() => {
            //here to generate the pdf from resource

            setIsDownloading(false);
        }, 5000);
    }

    return (
        <Button
            startDecorator={<DownloadRounded/>}
            onClick={downloadPdf}
            loading={isDownloading}
            {...buttonProps}
        >
            Download PDF
        </Button>
    )
}
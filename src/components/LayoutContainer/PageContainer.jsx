import {Box} from "@mui/joy";

export const PageContainer = (props) => {
    const {children, showPadding = true} = props;
    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
                    bgcolor: 'background.body',
                    zIndex: 995,
                    padding: showPadding ? 1.5 : 0,
                }}
            >
                {children}
            </Box>
        </Box>
    )
}
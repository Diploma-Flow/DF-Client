import {Box} from "@mui/joy";

export const MainContainer = (props) => {

    const {showPadding = true, children} = props;
    const styleProps = {
        px: !showPadding ? 0 : {
            xs: 2,
            md: 6,
        },
        pt: !showPadding ? 0 : {
            xs: 'calc(12px + var(--Header-height))',
            sm: 'calc(12px + var(--Header-height))',
            md: 3,
        },
        pb: !showPadding ? 0 : {
            xs: 2,
            sm: 2,
            md: 3,
        },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: 1,
        overflow: 'auto',
    }

    return (
        <Box
            component="main"
            className="MainContent"
            sx={styleProps}
        >
            {children}
        </Box>
    )
}
import Button from "@mui/joy/Button";
import {CircularProgress} from "@mui/joy";
import {LoginOutlined} from "@mui/icons-material";

export const ButtonLoader = (props) => {
    const {isLoading, text, ...buttonProps} = props

    return (
        <Button
            startDecorator={isLoading ? null : <LoginOutlined />}
            variant="solid"
            color="primary"
            size="sm"
            fullWidth
            disabled={isLoading} // Disable the button when loading
            {...buttonProps}
        >
            {isLoading ? (
                <CircularProgress
                    color="neutral"
                    size="sm"
                    value={25}
                    variant="plain"
                />
            ) : (
                text
            )}
        </Button>
    );
};
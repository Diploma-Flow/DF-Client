import {useLocation} from "react-router-dom";

export const useMessagePageStatus = () => {
    const location = useLocation();

    const isMessagePageOpen = location.pathname
        .split("/")
        .filter((segment) => segment !== "")
        .includes("messages");

    return { isMessagePageOpen };
};
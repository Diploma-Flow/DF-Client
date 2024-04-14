import React from "react";
import {Link as RouterLink, useLocation} from "react-router-dom";
import {Breadcrumbs, IconButton, Link as StyledLink} from "@mui/joy";
import {HomeRounded, KeyboardArrowRightRounded} from "@mui/icons-material";
import {useSystemSetting} from "../../context/SystemSettingContext";


const BreadCrumbs = ({excluded}) => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");
    const isExcludedPageOpen = pathSegments.includes(excluded);
    const {breadcrumbsVisibility} = useSystemSetting();
    const isLast = (index) => index === pathSegments.length - 1;

    const getLinkUrl = (index) => {
        return `/${pathSegments
            .slice(0, index + 1)
            .join("/")}`;
    }

    return breadcrumbsVisibility && !isExcludedPageOpen && (
        <Breadcrumbs separator={<KeyboardArrowRightRounded/>} aria-label="breadcrumbs">
            <StyledLink component={RouterLink} to="/" color="neutral" underline="none">
                <IconButton>
                    <HomeRounded/>
                </IconButton>
                Home
            </StyledLink>
            {pathSegments.map((item, index) => (
                <StyledLink
                    key={index}
                    component={RouterLink}
                    to={getLinkUrl(index)}
                    color={isLast(index) ? "primary" : "neutral"}
                    disabled={isLast(index)}
                >
                    {item}
                </StyledLink>
            ))}
        </Breadcrumbs>
    );
};

export default BreadCrumbs;

import * as React from 'react';
import Typography from "@mui/joy/Typography";
import {PageTitle} from "../../../../components/PageTitle/PageTitle";
import Button from "@mui/joy/Button";
import useAxios from "../../../../hooks/useAxios";

export default function Home() {

    const api = useAxios();

    const handleClick = () => {
        api.get('/message/testing')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <>
            <PageTitle title="Home"/>
            <Button onClick={handleClick} variant="outlined" color="primary">
                Test refresh API
            </Button>
        </>
    );
}
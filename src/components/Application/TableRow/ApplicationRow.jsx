import StatusChip from "../../StatusChip/StatusChip";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import {TruncatedTypography} from "./TruncatedTypography";
import {PersonAvatarDisplay} from "./PersonAvatarDisplay";
import {VertDotsButton} from "../../EditVertDotsButton/VertDotsButton";

export const ApplicationRow = ({row}) => {
    const handleRowClick = (row) => {
        alert(row.id);
    }

    return (
        <tr>
            <td style={{paddingLeft: '12px'}}>
                <Typography level="body-sm">
                    {row.id}
                </Typography>
            </td>
            <TruncatedTypography maxTitleLength={25} title={row.title}/>
            <td>
                <StatusChip status={row.status}/>
            </td>
            <td>
                <PersonAvatarDisplay person={row.owner}/>
            </td>
            <td>
                <PersonAvatarDisplay person={row.supervisor}/>
            </td>
            <td>
                <Typography level="body-sm">
                    {row.dateOfCreation}
                </Typography>
            </td>
            <td>
                <VertDotsButton to={`/application/details/${row.id}`}/>
            </td>
        </tr>
    )
}
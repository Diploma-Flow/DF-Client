import Typography from "@mui/joy/Typography";
import {TruncatedTypography} from "../../Application/TableRow/TruncatedTypography";
import StatusChip from "../../StatusChip/StatusChip";
import {PersonAvatarDisplay} from "../../Application/TableRow/PersonAvatarDisplay";
import {VertDotsButton} from "../../EditVertDotsButton/VertDotsButton";
import * as React from "react";

export const DiplomaRow = ({row}) => {
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
                <Typography level="body-sm">
                    {row.applicationId}
                </Typography>
            </td>
            <td>
                <PersonAvatarDisplay person={row.supervisor}/>
            </td>
            <td>
                <Typography level="body-sm">
                    {row.mark}
                </Typography>
            </td>
            <td>
                <Typography level="body-sm">
                    {row.dateOfCreation}
                </Typography>
            </td>
            <td>
                <VertDotsButton to={`/diploma/details/${row.id}`}/>
            </td>
        </tr>
    )
}
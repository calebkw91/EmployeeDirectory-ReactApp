import React from "react";

function EmployeeRow(props) {
    return <tr>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.title}</td>
            </tr>
}

export default EmployeeRow;
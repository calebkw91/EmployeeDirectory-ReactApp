import React from "react";

class EmployeeTable extends React.Component {
    state = {
        filter: "",
        sort: ""
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                First
                            </th>
                            <th scope="col">
                                Last
                            </th>
                            <th scope="col">
                                Title
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;
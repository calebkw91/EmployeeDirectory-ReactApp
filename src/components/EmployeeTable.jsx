import React from "react";
import EmployeeRow from "./EmployeeRow";
import employees from "../friends.json";

class EmployeeTable extends React.Component {
    state = {
        filter: "",
        sort: "",
        employees: employees
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
                    <tbody>
                        {this.state.employees.map(e => 
                            <EmployeeRow 
                                key={e.id}
                                id={e.id}
                                firstName={e.firstName}
                                lastName={e.lastName}
                                title={e.title}
                            />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;
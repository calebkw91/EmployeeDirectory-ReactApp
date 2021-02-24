import React from "react";
import EmployeeCol from "./EmployeeCol";
import employees from "./friends.json";

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
                        <tr>
                            {this.state.employees.map(e => 
                                <EmployeeCol 
                                    key={e.id}
                                    id={e.id}
                                    content={e.firstName}
                                />)}
                        </tr>
                        <tr>
                            {this.state.employees.map(e => 
                                <EmployeeCol 
                                    key={e.id}
                                    id={e.id}
                                    content={e.lastName}
                                />)}
                        </tr>
                        <tr>
                            {this.state.employees.map(e => 
                                <EmployeeCol 
                                    key={e.id}
                                    id={e.id}
                                    content={e.title}
                                />)}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;
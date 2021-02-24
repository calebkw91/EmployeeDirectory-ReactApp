import React from "react";
import EmployeeRow from "./EmployeeRow";
import employees from "../friends.json";

class EmployeeTable extends React.Component {
    state = {
        filter: "",
        sort: 0,
        employees: employees,
        firstNameHeader: "First Name",
        lastNameHeader: "Last Name",
        titleHeader: "Title"
    }

    handleFirstNameSort = () => {
        let newSort = this.state.sort + 1;
        let unsorted = this.state.employees;
        let firstNameHeader = "";

        if(newSort > 2){
            newSort = 0;
            firstNameHeader = "First Name";
            unsorted.sort((a, b) => {
                return a.id - b.id;
            });
        }

        if(newSort === 1){
            firstNameHeader = "First Name ^";
            unsorted.sort((a, b) => {
                if(a.firstName.toUpperCase() < b.firstName.toUpperCase()){
                    return -1;
                }
                if(a.firstName.toUpperCase() > b.firstName.toUpperCase()){
                    return 1;
                }
    
                return 0;
            });
        }

        if(newSort === 2){
            firstNameHeader = "First Name v";
            unsorted.sort((a, b) => {
                if(a.firstName.toUpperCase() < b.firstName.toUpperCase()){
                    return 1;
                }
                if(a.firstName.toUpperCase() > b.firstName.toUpperCase()){
                    return -1;
                }
    
                return 0;
            });
        }

        this.setState({
            employees: unsorted,
            sort: newSort,
            firstNameHeader: firstNameHeader
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" onClick={this.handleFirstNameSort}>
                                {this.state.firstNameHeader}
                            </th>
                            <th scope="col">
                                {this.state.lastNameHeader}
                            </th>
                            <th scope="col">
                                {this.state.titleHeader}
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
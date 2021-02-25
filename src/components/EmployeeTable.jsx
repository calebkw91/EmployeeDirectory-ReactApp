import React from "react";
import EmployeeRow from "./EmployeeRow";
import employees from "../friends.json";

class EmployeeTable extends React.Component {
    state = {
        filter: "",
        firstSort: 0,
        lastSort: 0,
        titleSort: 0,
        employees: employees,
        firstNameHeader: "First Name",
        lastNameHeader: "Last Name",
        titleHeader: "Title"
    }

    handleFirstNameSort = () => {
        let newSort = this.state.firstSort + 1;
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
            firstNameHeader = "First Name \u25B2";
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
            firstNameHeader = "First Name \u25BC";
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
            firstSort: newSort,
            lastSort: 0,
            titleSort: 0,
            firstNameHeader: firstNameHeader,
            lastNameHeader: "Last Name",
            titleHeader: "Title"
        });
    }

    handleLastNameSort = () => {
        let newSort = this.state.lastSort + 1;
        let unsorted = this.state.employees;
        let lastNameHeader = "";

        if(newSort > 2){
            newSort = 0;
            lastNameHeader = "Last Name";
            unsorted.sort((a, b) => {
                return a.id - b.id;
            });
        }

        if(newSort === 1){
            lastNameHeader = "Last Name \u25B2";
            unsorted.sort((a, b) => {
                if(a.lastName.toUpperCase() < b.lastName.toUpperCase()){
                    return -1;
                }
                if(a.lastName.toUpperCase() > b.lastName.toUpperCase()){
                    return 1;
                }
    
                return 0;
            });
        }

        if(newSort === 2){
            lastNameHeader = "Last Name \u25BC";
            unsorted.sort((a, b) => {
                if(a.lastName.toUpperCase() < b.lastName.toUpperCase()){
                    return 1;
                }
                if(a.lastName.toUpperCase() > b.lastName.toUpperCase()){
                    return -1;
                }
    
                return 0;
            });
        }

        this.setState({
            employees: unsorted,
            firstSort: 0,
            lastSort: newSort,
            titleSort: 0,
            firstNameHeader: "First Name",
            lastNameHeader: lastNameHeader,
            titleHeader: "Title"
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
                            <th scope="col" onClick={this.handleLastNameSort}>
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
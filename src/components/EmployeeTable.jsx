import React from "react";
import EmployeeRow from "./EmployeeRow";
import employees from "../friends.json";
import FilterForm from "./FilterForm";

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

    handleTitleSort = () => {
        let newSort = this.state.titleSort + 1;
        let unsorted = this.state.employees;
        let titleHeader = "";

        if(newSort > 2){
            newSort = 0;
            titleHeader = "Title";
            unsorted.sort((a, b) => {
                return a.id - b.id;
            });
        }

        if(newSort === 1){
            titleHeader = "Title \u25B2";
            unsorted.sort((a, b) => {
                if(a.title.toUpperCase() < b.title.toUpperCase()){
                    return -1;
                }
                if(a.title.toUpperCase() > b.title.toUpperCase()){
                    return 1;
                }
    
                return 0;
            });
        }

        if(newSort === 2){
            titleHeader = "Title \u25BC";
            unsorted.sort((a, b) => {
                if(a.title.toUpperCase() < b.title.toUpperCase()){
                    return 1;
                }
                if(a.title.toUpperCase() > b.title.toUpperCase()){
                    return -1;
                }
    
                return 0;
            });
        }

        this.setState({
            employees: unsorted,
            firstSort: 0,
            lastSort: 0,
            titleSort: newSort,
            firstNameHeader: "First Name",
            lastNameHeader: "Last Name",
            titleHeader: titleHeader
        });
    }

    filterEmployees = (filter) => {
        if(filter.length < 1){
            this.setState({ employees: employees });
        }
        
        let filtered = employees.filter(e => {
            let name = e.firstName.substring(0,filter.length);
            return name.toLowerCase() === filter.toLowerCase()
        });

        if(filter.length < 2){
            console.log("here");
            this.setState({ employees: employees });
        }
        else{
            this.setState({ employees: filtered });
        }
    }

    handleInputChange = (event) => {
        const filter = event.target.value;
        this.setState({filter: filter});
        this.filterEmployees(this.state.filter);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" onClick={this.handleFirstNameSort}>
                                        {this.state.firstNameHeader}
                                    </th>
                                    <th scope="col" onClick={this.handleLastNameSort}>
                                        {this.state.lastNameHeader}
                                    </th>
                                    <th scope="col" onClick={this.handleTitleSort}>
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
                    <div className="col-md-4">
                        <FilterForm
                            value={this.state.filter}
                            handleFilterChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeTable;
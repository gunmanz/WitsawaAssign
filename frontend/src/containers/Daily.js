import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Daily.css"

export default class Daily extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
          <div className="Daily">
            <form>
                    <BootstrapTable>
                        <TableHeaderColumn dataField='User' headerAlign='center' isKey>User</TableHeaderColumn>
                        <TableHeaderColumn dataField='Amount' headerAlign='center' type='numeric'>Amount</TableHeaderColumn>
                        <TableHeaderColumn dataField='Type' headerAlign='center' >Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='Remark' headerAlign='center' >Remark</TableHeaderColumn>
                        <TableHeaderColumn dataField='Date' headerAlign='center' type='date' >Date</TableHeaderColumn>
                        <TableHeaderColumn headerAlign='center'>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                dateFormat="YYYY-MM-dd HH:mm:ss"
                            />
                        </TableHeaderColumn>
                    </BootstrapTable>
            </form>            
          </div>
        );
    }
}
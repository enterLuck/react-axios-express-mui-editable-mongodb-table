import React from 'react'
import {
    Form,
    Button,
    Box,
    TextField,
    Typography
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate
} from '@mui/x-data-grid-generator'

import './styles/SecondComponent.component.scss'

export default class SecondComponent extends React.Component {
    render (){
        constructor(){
            super();
            this.state = [
                { columns :
                    [
                    { field: 'name', headerName: 'Name', width: 180, editable: true },
                    { field: 'age', headerName: 'Age', type: 'number', editable: true },
                    {
                      field: 'dateCreated',
                      headerName: 'Date Created',
                      type: 'date',
                      width: 180,
                      editable: true,
                    },
                    {
                      field: 'lastLogin',
                      headerName: 'Last Login',
                      type: 'dateTime',
                      width: 220,
                      editable: true,
                    },
                    ]},{
                        rows:[
                        {
                            id: 1,
                            name: randomTraderName(),
                            age: 25,
                            dateCreated: randomCreatedDate(),
                            lastLogin: randomUpdatedDate(),
                          },
                          {
                            id: 2,
                            name: randomTraderName(),
                            age: 36,
                            dateCreated: randomCreatedDate(),
                            lastLogin: randomUpdatedDate(),
                          },
                          {
                            id: 3,
                            name: randomTraderName(),
                            age: 19,
                            dateCreated: randomCreatedDate(),
                            lastLogin: randomUpdatedDate(),
                          },
                          {
                            id: 4,
                            name: randomTraderName(),
                            age: 28,
                            dateCreated: randomCreatedDate(),
                            lastLogin: randomUpdatedDate(),
                          },
                          {
                            id: 5,
                            name: randomTraderName(),
                            age: 23,
                            dateCreated: randomCreatedDate(),
                            lastLogin: randomUpdatedDate(),
                          },
                    ]}]; // end state
        } // end constructor
        return (
            <div className="second-component-container">
                <Box 
                    component="form"
                    sx={{ width:'90%', maxWidth:100}} 
                    autoComplete="off"
                >
                    <Typography variant="h2" component="div">
                        Data Grid
                    </Typography>
                    <DataGrid rows={this.state.rows} columns={this.state.columns} />
                    <Button variant="outlined">Go to Display</Button>
                </Box>
            </div>
        ) //end return
    } //end render
} //end class

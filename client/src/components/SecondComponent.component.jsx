import React from 'react'
import {
    Form,
    Button,
    Box,
    TextField,
    Typography
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'


import './styles/SecondComponent.component.scss'

export default class SecondComponent extends React.Component {
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
                    name: 'aname',
                    age: 25,
                    dateCreated: '01/24/1982',
                    lastLogin: '12/12/1984',
                  },
                  {
                    id: 2,
                    name: 'bname',
                    age: 36,
                    dateCreated: '01/24/1982',
                    lastLogin: '12/12/1984',
                  },
                  {
                    id: 3,
                    name: 'cname',
                    age: 19,
                    dateCreated: '01/24/1982',
                    lastLogin: '12/12/1984',
                  },
            ]}]; // end state
  } // end constructor
  render (){
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

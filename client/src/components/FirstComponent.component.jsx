import React from 'react'
import './styles/FirstComponent.component.scss'
import {
    Button,
    Box,
    TextField,
    Typography
} from '@mui/material'

class FirstComponent extends React.Component {

    constructor() {
        super()
        this.state = {approval:false};

        this.authenticate = this.authenticate.bind(this);
    } // ends constructor

    authenticate() {
            this.setState({ appoval:true});
    }

    render () {
        return (
            <div className="first-component-container">
                <Box 
                    component="form"
                    sx={{ margin:'50px',width:'90%', maxWidth:500}} 
                    autoComplete="off"
                    onSubmit={this.authenticate}
                >
                    <Typography variant="h4" component="div" sx={{ padding:'10px'}}>
                        Enter YES
                    </Typography>
                    <TextField 
                        required
                        id="outlined-basic" 
                        variant="outlined" 
                        sx={{ padding:'10px'}}
                        name="password"
                    />
                    <br/>
                    <Button variant="outlined" type="submit">Login</Button>
                </Box>
            </div>
        )
    }
} 

export default FirstComponent;
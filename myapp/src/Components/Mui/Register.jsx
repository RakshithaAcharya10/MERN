import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Register() {
  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>REGISTER PAGE</Typography>
        <TextField variant='outlined' type='text' label='NAME' fullWidth style={{marginBottom:"10px"}}/>
        <TextField variant='outlined' type='email' label='EMAIL' fullWidth style={{marginBottom:"10px"}}/>
        <TextField variant='outlined' type='password' label='PASSWORD' fullWidth style={{marginBottom:"10px"}}/>
        <TextField variant='outlined' type='number' label='PHONE' fullWidth style={{marginBottom:"10px"}}/>
        <TextField variant='outlined' multiline rows={5} label='ADDRESS' fullWidth style={{marginBottom:"10px"}}/>
        <Button variant='contained' fullWidth>REGISTER</Button>
      </Paper>
    </div>
  )
}

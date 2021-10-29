import React from 'react'
import Button  from '@material-ui/core/Button'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type CountryCardProps={
    flag:string
    name:string
    region:string 
    population: number
    capital:string
    onClick:Function   
    languages:any
    disabled:boolean
}

const CountryCard=({flag, name,onClick, region, population, capital, languages, disabled}:CountryCardProps) =>{

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Flag</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Capital</TableCell>
                <TableCell align="right">Population</TableCell>
                <TableCell align="right">Languages</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                   <TableRow
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left"component="th" scope="row">
                   <img src={flag} width ="200px"  alt={name} />
                  </TableCell>
                  <TableCell align="right">{name}</TableCell>
                  <TableCell align="right">{capital}</TableCell>
                  <TableCell align="right">{population}</TableCell>
                  <TableCell align="right">{languages.map((lang:any)=> <li key={lang.name}>{lang.name}</li>)}</TableCell>
                  <TableCell align="right"><Button disabled={disabled} className="btn btn__primary" onClick={()=>onClick()}>Like</Button></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
}  


export default CountryCard

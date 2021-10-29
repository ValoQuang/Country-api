import React from "react";
import {CountryInfoProps} from "../../types/CountryTypes";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const CountryInfo = ({flag, name, population, languages, region, capital, onClick, disabled}:CountryInfoProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dense table">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Capital</TableCell>
            <TableCell align="center">Population</TableCell>
            <TableCell align="center">Region</TableCell>
            <TableCell align="center">Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <img src ={flag} alt ="flag" width = "200" height = "100"/>
              </TableCell>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{capital}</TableCell>
              <TableCell align="center">{population}</TableCell>
              <TableCell align="center">{region}</TableCell> 
              <TableCell align="center">{languages.map((lang:any) => (<li key = {lang.name}>{lang.name}</li>))}</TableCell>   
              <Button disabled={disabled} onClick={()=> onClick()}>Like</Button>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CountryInfo;

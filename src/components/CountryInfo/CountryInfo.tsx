import React from "react";
import {CountryInfoProps} from "../../types/CountryTypes";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CountryInfo = ({flag, name, population, languages, region, capital}:CountryInfoProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Capital</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <img src ={flag} alt ="flag"/>
              </TableCell>
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">{capital}</TableCell>
              <TableCell align="right">{population}</TableCell>
              <TableCell align="right">{region}</TableCell>
              <TableCell align="right">{languages}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CountryInfo;

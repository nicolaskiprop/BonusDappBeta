import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'inherit',
    color:'#999',
    fontWeight:'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Simeone', 0x255325572D2362EaBab0C54D5ca2D69B587AA389, 'Dev', 12.5 ),
  createData('Simeone', 0x255325572D2362EaBab0C54D5ca2D69B587AA389, 'Dev', 12.5 ),
  createData('Simeone', 0x255325572D2362EaBab0C54D5ca2D69B587AA389, 'Dev', 12.5 ),
  createData('Simeone', 0x255325572D2362EaBab0C54D5ca2D69B587AA389, 'Dev', 12.5 ),
  createData('Simeone', 0x255325572D2362EaBab0C54D5ca2D69B587AA389, 'Dev', 12.5 ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx ={{mt:'70px'}}>
      <Table sx={{ minWidth:600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
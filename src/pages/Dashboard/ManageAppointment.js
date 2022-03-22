import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';


const ManageAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [status, setStatus] = useState(false)
  useEffect(() => {
    fetch("https://salty-savannah-31637.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
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

  const handleStatus = id => {
    axios.put(`https://salty-savannah-31637.herokuapp.com/updateStatue/${id}`)
    .then((data)=>setStatus(true))
  }


  return <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Button</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            appointment?.map(appoin =>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {appoin?.name}
              </StyledTableCell>
              <StyledTableCell align="right">{appoin?.email}</StyledTableCell>
              <StyledTableCell align="right">{appoin?.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={() => handleStatus(appoin?._id)}
                    sx={{ m: 2 }}
                    variant="contained"
                    color="success">
                    Approved Order
                </Button>
                </StyledTableCell>
            </StyledTableRow>
             ) } 
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
};

export default ManageAppointment;

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


const ManageAllReview = () => {
    const [review, setReview] = useState([]);
    const [status, setStatus] = useState(false)
  useEffect(() => {
    fetch("https://salty-savannah-31637.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
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
    axios.put(`https://salty-savannah-31637.herokuapp.com/updateReivewStatue/${id}`)
    .then((data)=>setStatus(true));
    alert("Approved Successfully")
  }


  return <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
            <StyledTableCell align="right">review</StyledTableCell>
            <StyledTableCell align="right">Button</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            review?.map(view =>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {view?.name}
              </StyledTableCell>
              <StyledTableCell align="right">{view?.status}</StyledTableCell>
              <StyledTableCell align="right">{view?.review.slice(0,50)}.....see More</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={() => handleStatus(view?._id)}
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

export default ManageAllReview;

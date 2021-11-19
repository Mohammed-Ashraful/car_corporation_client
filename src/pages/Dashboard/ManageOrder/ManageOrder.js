import React, { useEffect, useState } from 'react';
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


const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(false)
  useEffect(() => {
    fetch('https://safe-tundra-89323.herokuapp.com/orders')
      .then(res => res.json())
    .then(data=>setOrders(data))
  }, [])
  console.log(orders);
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
    axios.put(`http://localhost:5000/updateStatue${id}`)
    // axios.put(`https://safe-tundra-89323.herokuapp.com/updateStatue/${id}`)
    .then((data)=>setStatus(true))
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            orders?.map(order =>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {order?.name}
              </StyledTableCell>
              <StyledTableCell align="right">{order?.email}</StyledTableCell>
              <StyledTableCell align="right">{order?.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={() => handleStatus(order?._id)}
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
  );
};

export default ManageOrder;
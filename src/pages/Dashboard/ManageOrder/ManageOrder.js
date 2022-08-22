import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(false);
  const [action, setAction] = useState(false);
  useEffect(() => {
    fetch("https://pacific-shore-00017.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const handleStatus = (id) => {
    axios
      .put(`https://pacific-shore-00017.herokuapp.com/updateStatue/${id}`)
      .then((data) => {
        console.log(data);
        setAction(!action);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{  }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {order?.car_name}
              </StyledTableCell>
              <StyledTableCell align="right">{order?.email}</StyledTableCell>
              <StyledTableCell align="right">{order?.status}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => handleStatus(order?._id)}
                  sx={{ m: 2 }}
                  variant="contained"
                  color="success"
                >
                  Approved Order
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageOrder;

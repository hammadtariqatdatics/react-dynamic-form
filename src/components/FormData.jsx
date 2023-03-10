import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import http from "../axios/Axios";
import { Container, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const FormData = () => {
  const [customersList, setCustomersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getCustomers = async () => {
      try {
        const response = await http.get("/customers");
        console.log(response);
        setCustomersList(response);
        setIsLoading(false);
      } catch (error) {
        console.log("Api is not working", error);
      }
    };
    getCustomers();
  }, []);
  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="right">Cust-Name</TableCell>
                <TableCell align="right">Cust-Email</TableCell>
                <TableCell align="right">Cust-Address</TableCell>
                <TableCell align="right">Zip Code</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Prod-ID</TableCell>
                <TableCell align="right">Prod-Name</TableCell>
                <TableCell align="right">Prod-Price</TableCell>
                <TableCell align="right">Prod-Quantity</TableCell>
                <TableCell align="right">Prod-Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <Box
                  sx={{
                    padding: "10px 0px",
                  }}
                  align="center"
                >
                  <CircularProgress color="primary" />
                </Box>
              ) : (
                customersList.map((list) => {
                  return (
                    <TableRow
                      key={list.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {list.orderId}
                      </TableCell>
                      <TableCell align="right">{list.customerName}</TableCell>
                      <TableCell align="right">{list.customerEmail}</TableCell>
                      <TableCell align="right">{list.address}</TableCell>
                      <TableCell align="right">{list.zipCode}</TableCell>
                      <TableCell align="right">{list.city}</TableCell>
                      {list.addFields.map((productsList, index) => {
                        return (
                          <React.Fragment key={index}>
                            <TableCell component="th" scope="row">
                              {productsList.productId}
                            </TableCell>
                            <TableCell align="right">
                              {productsList.productName}
                            </TableCell>
                            <TableCell align="right">
                              {productsList.productPrice}
                            </TableCell>
                            <TableCell align="right">
                              {productsList.productQuantity}
                            </TableCell>
                            <TableCell align="right">
                              {productsList.productTotal}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default FormData;

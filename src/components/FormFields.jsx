import React from "react";
import { FieldArray, Form, Formik } from "formik";
import customerSchema from "../schemas/Validation";
import {
  Box,
  Container,
  TextField,
  Grid,
  Button,
  FormControl,
} from "@mui/material";
import MuiTypography from "./MuiTypography";
import { Add, Delete, Send } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import http from "../axios/Axios";

const FormFields = () => {
  const submitData = async (values, resetForm) => {
    try {
      if (
        values.orderId !== "" &&
        values.customerName !== "" &&
        values.customerEmail !== "" &&
        values.address !== "" &&
        values.zipCode !== "" &&
        values.city !== ""
      ) {
        const data = await http.post("/customers", values);
        console.log(data);
        setTimeout(() => {
          resetForm();
        }, 2000);
      } else {
        alert("Please fill up the fields, Thanks!");
      }
    } catch (error) {
      console.log("Local Server is not working", error);
    }
  };
  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <Formik
          initialValues={{
            orderId: "",
            customerName: "",
            customerEmail: "",
            addFields: [
              {
                productId: "",
                productName: "",
                productPrice: "",
                productQuantity: "",
                productTotal: "",
              },
            ],
            address: "",
            city: "",
            zipCode: "",
          }}
          validationSchema={customerSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            errors,
            handleBlur,
            touched,
            resetForm,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container rowSpacing={5} columnSpacing={5}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    type="text"
                    name="orderId"
                    label="Order Id"
                    value={values.orderId}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    required={true}
                    onBlur={handleBlur}
                  />
                  {errors.orderId ? (
                    <MuiTypography
                      text={errors.orderId}
                      variant="subtitle2"
                      component="h6"
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    type="text"
                    name="customerName"
                    label="Customer Name"
                    value={values.customerName}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    required={true}
                    onBlur={handleBlur}
                  />
                  {errors.customerName ? (
                    <MuiTypography
                      text={errors.customerName}
                      variant="subtitle2"
                      component="h6"
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    type="text"
                    name="customerEmail"
                    label="Customer Email"
                    value={values.customerEmail}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    required={true}
                    onBlur={handleBlur}
                  />
                  {errors.customerEmail ? (
                    <MuiTypography
                      text={errors.customerEmail}
                      variant="subtitle2"
                      component="h6"
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    type="text"
                    name="address"
                    label="Address"
                    value={values.address}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    required={true}
                    onBlur={handleBlur}
                  />
                  {errors.address ? (
                    <MuiTypography
                      text={errors.address}
                      variant="subtitle2"
                      component="h6"
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      color="primary"
                      fullWidth={true}
                      required={true}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="Guj">Gujranwala</MenuItem>
                      <MenuItem value="Lahore">Lahore</MenuItem>
                      <MenuItem value="Multan">Multan</MenuItem>
                      <MenuItem value="Isb">Islamabad</MenuItem>
                      <MenuItem value="Peshawar">Peshawar</MenuItem>
                      <MenuItem value="Sialkot">Sialkot</MenuItem>
                    </Select>
                  </FormControl>
                  {errors.city ? (
                    <MuiTypography
                      text={errors.city}
                      variant="subtitle2"
                      component="h6"
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    type="text"
                    name="zipCode"
                    label="Zip code"
                    value={values.zipCode}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    required={true}
                    onBlur={handleBlur}
                  />
                  {errors.zipCode ? (
                    <MuiTypography
                      text={errors.zipCode}
                      variant="subtitle2"
                      component="h6"
                    />
                  ) : null}
                </Grid>
              </Grid>
              <FieldArray
                name="addFields"
                render={(arrayHelpers) => (
                  <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={5}
                    marginTop={1}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button
                        variant="outlined"
                        startIcon={<Add />}
                        onClick={() =>
                          arrayHelpers.push({
                            productId: "",
                            productName: "",
                            productPrice: "",
                            productQuantity: "",
                            productTotal: "",
                          })
                        }
                      >
                        Add Fields
                      </Button>
                    </Grid>

                    {values.addFields.map((addFields, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productId`}
                              label="Product ID"
                              value={addFields.productId}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                              required={true}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productName`}
                              label="Product Name"
                              value={addFields.productName}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                              required={true}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productPrice`}
                              label="Product Price"
                              value={addFields.productPrice}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                              required={true}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productQuantity`}
                              label="Product Quantity"
                              value={addFields.productQuantity}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                              required={true}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productTotal`}
                              label="Product Total"
                              value={addFields.productTotal}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                              required={true}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Button
                              variant="outlined"
                              startIcon={<Delete />}
                              onClick={() => arrayHelpers.remove(index)}
                              disabled={values.addFields.length === 1}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </React.Fragment>
                      );
                    })}
                  </Grid>
                )}
              />
              <Box marginTop={6}>
                <Button
                  variant="outlined"
                  startIcon={<Send />}
                  onClick={() => submitData(values, resetForm)}
                >
                  Submit Form
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default FormFields;

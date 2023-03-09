import React from "react";
import { FieldArray, Form, Formik } from "formik";
import customerSchema from "../schemas/Validation";
import { Box, Container, TextField, Grid, Button } from "@mui/material";
import MuiTypography from "./MuiTypography";
import { Add, Delete, Send } from "@mui/icons-material";

const FormFields = () => {
  const submitData = (values) => {
    console.log("hi", values);
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
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ values, handleSubmit, handleChange, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container rowSpacing={5} columnSpacing={5}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    type="text"
                    name="orderId"
                    placeholder="Order Id..."
                    value={values.orderId}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                  />
                  {errors.orderId || touched.orderId ? (
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
                    placeholder="Customer Name..."
                    value={values.customerName}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                  />
                  {errors.customerName || touched.customerName ? (
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
                    placeholder="Customer Email..."
                    value={values.customerEmail}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                  />
                  {errors.customerEmail || touched.customerEmail ? (
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
                    placeholder="Address..."
                    value={values.address}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                  />
                  {errors.address || touched.address ? (
                    <MuiTypography
                      text={errors.address}
                      variant="subtitle2"
                      component="h6"
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    type="text"
                    name="city"
                    placeholder="City..."
                    value={values.city}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                  />
                  {errors.city || touched.city ? (
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
                    placeholder="Zip code..."
                    value={values.zipCode}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                  />
                  {errors.zipCode || touched.zipCode ? (
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
                    {values.addFields.map((addFields, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productId`}
                              placeholder="product ID..."
                              value={addFields.productId}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productName`}
                              placeholder="Product Name..."
                              value={addFields.productName}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productPrice`}
                              placeholder="Product Price..."
                              value={addFields.productPrice}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productQuantity`}
                              placeholder="Product Quantity..."
                              value={addFields.productQuantity}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                              type="text"
                              name={`addFields.${index}.productTotal`}
                              placeholder="Product Total..."
                              value={addFields.productTotal}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Button
                              variant="outlined"
                              startIcon={<Delete />}
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Delete
                            </Button>
                          </Grid>
                        </React.Fragment>
                      );
                    })}

                    <Button
                      variant="outlined"
                      fullWidth={true}
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
                      Add
                    </Button>
                  </Grid>
                )}
              />
              <Button
                variant="outlined"
                startIcon={<Send />}
                onClick={() => submitData(values)}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default FormFields;

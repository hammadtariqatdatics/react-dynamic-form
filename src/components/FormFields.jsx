import React from "react";
import { FieldArray, Form, Formik } from "formik";
import customerSchema from "../schemas/Validation";
import {
  Box,
  Container,
  Grid,
  Button,
  FormControl,
  Typography,
} from "@mui/material";
import { Add, Delete, Send } from "@mui/icons-material";
import http from "../api/Api";
import CustomTextFields from "./CustomTextFields";
import CustomSelectFields from "./CustomSelectFields";

const FormFields = () => {
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
          onSubmit={async (values) => {
            try {
              const data = await http.post("/customers", values);
              console.log(data);
            } catch (error) {
              console.log("Local Server is not working", error);
            }
            console.log(values);
            alert("Form is validated! Submitting the form...");
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur, resetForm }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container rowSpacing={5} columnSpacing={5}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <CustomTextFields
                    type="number"
                    name="orderId"
                    label="Order Id"
                    value={values.orderId}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <CustomTextFields
                    type="text"
                    name="customerName"
                    label="Customer Name"
                    value={values.customerName}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <CustomTextFields
                    type="text"
                    name="customerEmail"
                    label="Customer Email"
                    value={values.customerEmail}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <CustomTextFields
                    type="text"
                    name="address"
                    label="Address"
                    value={values.address}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <FormControl fullWidth>
                    <CustomSelectFields
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      color="primary"
                      fullWidth={true}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <CustomTextFields
                    type="number"
                    name="zipCode"
                    label="Zip code"
                    value={values.zipCode}
                    onChange={handleChange}
                    color="primary"
                    fullWidth={true}
                    variant="outlined"
                    onBlur={handleBlur}
                  />
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
                            <CustomTextFields
                              type="number"
                              name={`addFields.${index}.productId`}
                              label="Product ID"
                              value={addFields.productId}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <CustomTextFields
                              type="text"
                              name={`addFields.${index}.productName`}
                              label="Product Name"
                              value={addFields.productName}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <CustomTextFields
                              type="number"
                              name={`addFields.${index}.productPrice`}
                              label="Product Price"
                              value={addFields.productPrice}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <CustomTextFields
                              type="number"
                              name={`addFields.${index}.productQuantity`}
                              label="Product Quantity"
                              value={addFields.productQuantity}
                              onChange={handleChange}
                              color="primary"
                              fullWidth={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <CustomTextFields
                              type="number"
                              name={`addFields.${index}.productTotal`}
                              label="Product Total"
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
                  // onClick={() => submitData(values, resetForm)}
                  type="submit"
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

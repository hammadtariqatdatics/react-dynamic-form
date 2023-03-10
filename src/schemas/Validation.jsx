import * as yup from "yup";

const customerSchema = yup.object().shape({
  orderId: yup.string().required("Order ID is required..."),
  productId: yup.string().required("Product ID is required..."),
  customerName: yup
    .string()
    .min(3)
    .max(25)
    .required("Customer Name is required..."),
  customerEmail: yup.string().email().required("Email is required..."),
  productName: yup
    .string()
    .min(3)
    .max(25)
    .required("Product Name is required..."),
  productPrice: yup.string().required("Product Price is required..."),
  productQuantity: yup.string().required("Product Quantity is required..."),
  address: yup.string().min(10).max(30).required("Mention your address..."),
  city: yup.string().required("Mention your city..."),
  zipCode: yup.string().max(8).required("zip code is required..."),
  addFields: yup
    .array()
    .of(yup.string().required("These fields are required...")),
});

export default customerSchema;

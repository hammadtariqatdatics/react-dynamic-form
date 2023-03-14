import * as yup from "yup";

const { string, array, object, number } = yup;

const customerSchema = yup.object().shape({
  orderId: number().min(1).required("Order ID is required..."),
  customerName: string()
    .min(3)
    .max(25)
    .required("Customer Name is required..."),
  customerEmail: string().email().required("Email is required..."),
  address: string().min(10).max(30).required("Mention your address..."),
  city: string().required("Mention your city..."),
  zipCode: number().min(1).required("zip code is required..."),
  addFields: array()
    .of(
      object().shape({
        productId: number().min(1).required("Product ID is required..."),
        productName: string()
          .min(3)
          .max(25)
          .required("Product Name is required..."),
        productPrice: number().min(1).required("Product Price is required..."),
        productQuantity: number()
          .min(1)
          .required("Product Quantity is required..."),
        productTotal: number().min(1).required("Product Total is required..."),
      })
    )
    .required("These fields are required..."),
});

export default customerSchema;

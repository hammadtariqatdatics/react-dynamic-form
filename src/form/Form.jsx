import React from "react";
import HeroBanner from "../components/HeroBanner";
import FormFields from "../components/FormFields";
import FormData from "../components/FormData";

const Form = () => {
  return (
    <>
      <HeroBanner
        headingText="Order Form"
        paraText="Here are the Order form, you can order your items using the form below"
      />
      <FormFields />
      <FormData />
    </>
  );
};

export default Form;

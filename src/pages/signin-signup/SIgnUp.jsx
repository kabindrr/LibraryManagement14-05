import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Row, Col, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { postNewUser } from "../../helpers/axiosHelper";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    console.log(confirmPassword, rest.password);
    if (confirmPassword !== rest.password) {
      return alert("password do not match");
    }

    const responsePending = postNewUser(rest);
    toast.promise(responsePending, {
      pending: "please wait.....",
    });

    const { status, message } = await responsePending;
    toast[status](message);
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "firstname",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "lastname",
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      required: false,
      placeholder: "0123456",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*********",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "*********",
    },
  ];
  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            className="shadow-lg border p-5 rounded m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Join the Library Community!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} onChange={handleOnChange} />
            ))}

            <div className="my-3">
              <ul>
                <li className="text-danger fw-bolder">{error}</li>
              </ul>
            </div>
            <div className="d-grid">
              <Button type="submit" onClick={handleOnSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignUp;

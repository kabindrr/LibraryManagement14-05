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

    // setError("");
    // if (name === confirmPassword) {
    //   form.password !== value && setError("Password must Match");

    //   form.password.length > 6 && setError("Password must be 5 Character Long");
    // }

    // if (name === "confirmPassword") {
    //   !/(a-z)/.test(form.password) && setError("Must Have atleast 1 lowercase");
    //   !/(A-Z)/.test(form.password) && setError("Must Have atleast 1 Uppercase");
    //   !/(0-9)/.test(form.password) && setError("Must Have atleast 1 number");
    // }

    // if (name === "password" && form.confirmPassword) {
    //   form.confirmPassword !== value && setError("Password do not Match");
    // }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
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
      placeholder: "Sam",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Whisker",
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
      name: "confirm password",
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

import { useRef } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Row, Col, Form, Button } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../helpers/axiosHelper";
const SignIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Both Field must be filled");
    }

    const { status, message, tokens } = await loginUser({ email, password });
    toast[status](message);

    //store tokens in the sessions

    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@gmail.com",
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*********",
      inputRef: passRef,
    },
  ];
  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            onSubmit={handleOnSubmit}
            className="shadow-lg border p-5 rounded m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Welcome Back The Library Community</h1>
            <hr />
            {/* <input ref={emailRef} type="text" /> */}
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}

            <div className="d-grid">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignIn;

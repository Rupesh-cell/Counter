import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBInput,
} from "mdb-react-ui-kit";

const LoginForm = ({ goToRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (email.trim() === "" || password.trim() === "") {
      setLoginError(true);
      return;
    }

    // Your login logic here...
  };

  return (
    <MDBContainer className="my-5 not">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6" className="arrange">
            <MDBCardBody className="d-flex flex-column ">
              <div className="d-flex flex-row mt-2"></div>

              <h2>Sign into your Account</h2>
              <form onSubmit={handleLogin}>
                {/* Email Input */}
                <MDBInput
                  wrapperClass="mb-4"
                  id="email"
                  type="email"
                  size="lg"
                  placeholder="Type your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Input */}
                <MDBInput
                  wrapperClass="mb-4"
                  id="password"
                  type="password"
                  size="lg"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Display error if loginError is true */}
                {loginError && <p>Please fill in all fields.</p>}

                {/* Login Button */}
                <Button className="mb-4 w-100 gradient-custom-4" size="lg" type="submit">
                  Login
                </Button>
              </form>

              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <button
                  onClick={goToRegistration}
                  className="btn-link"
                  style={{ color: "#393f81", border: "none", background: "none", cursor: "pointer" }}
                >
                  Register here
                </button>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

const RegistrationForm = ({ goToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (name.trim() === "" || email.trim() === "" || password.trim() === "" || repeatPassword.trim() === "" || password !== repeatPassword) {
      setRegistrationError(true);
      return;
    }

    // Your registration logic here...
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <MDBCard className="m-7" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-6">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <MDBInput
              wrapperClass="mb-4"
              id="name"
              type="text"
              size="lg"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email Input */}
            <MDBInput
              wrapperClass="mb-4"
              id="email"
              type="email"
              size="lg"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input */}
            <MDBInput
              wrapperClass="mb-4"
              id="password"
              type="password"
              size="lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Repeat Password Input */}
            <MDBInput
              wrapperClass="mb-4"
              id="repeatPassword"
              type="password"
              size="lg"
              placeholder="Repeat your password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            {/* Display error if registrationError is true */}
            {registrationError && <p>Please fill in all fields correctly.</p>}

            {/* Register Button */}
            <Button type="submit">Register</Button>
          </form>

          <MDBCard>{/* ... (other registration form elements) ... */}</MDBCard>
          <p className="mb-4">
            Already have an account?{" "}
            <button onClick={goToLogin} className="btn-link" style={{ color: "#393f81", border: "none", background: "none", cursor: "pointer" }}>
              Go to Login
            </button>
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

const Login = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const goToRegistration = () => {
    setShowRegistration(true);
  };

  const goToLogin = () => {
    setShowRegistration(false);
  };

  return (
    <div>
      {showRegistration ? (
        <RegistrationForm goToLogin={goToLogin} />
      ) : (
        <LoginForm goToRegistration={goToRegistration} />
      )}
    </div>
  );
};

export default Login;
 
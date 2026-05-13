import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
  });

  const navigate = useNavigate();
  const [showPsw, setShowPsw] = useState(false);

  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(details);

    if (details.name === '' || details.email === '' || details.password === '' || details.confirmPassword === '' || details.phone === '') {
      toast.warning("Please fill all fields! ⚠️");
    } else if (!details.email.includes('@') || !details.email.includes('.')) {
      toast.warning("Email is invalid! ⚠️");
    } else if (details.password !== details.confirmPassword) {
      toast.warning("Passwords do not match! ⚠️");
    } 
     else {
        toast.success("Register Successfully");
        setDetails({
          name: "",
          password: "",
          email: "",
        });
        setTimeout(()=>{
          navigate("/login")
        },3000)
      }
    }
  };
    
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setDetails({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      
    });
  };

  const handlePassword = () => {
    setShowPsw(!showPsw);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <div id="form-container">
        <Form onSubmit={handleSubmit}>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                required
                onChange={handleChange}
                name='name'
                value={details.name}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone No:</Form.Label>
              <Form.Control
                type="tel"
                pattern="[6-9][0-9]{9}"
                required
                placeholder="Enter phone number"
                onChange={handleChange}
                name='phone'
                value={details.phone}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Enter email"
                onChange={handleChange}
                name='email'
                value={details.email}
              />
            </Form.Group>

            
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Create Password:</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={showPsw ? "text" : "password"}
                  required
                  placeholder="Enter password"
                  onChange={handleChange}
                  name='password'
                  value={details.password}
                />
                <span onClick={handlePassword} style={{ cursor: 'pointer', marginLeft: '8px', fontSize: '20px' }}>
                  {showPsw ? "👁️" : "🙈"}
                </span>
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridConfirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Confirm password"
                onChange={handleChange}
                name='confirmPassword'
                value={details.confirmPassword}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <span>
              Already registered? Click here to {" "}
              <a href="/login">Login</a>
            </span>
          </Form.Group>

          <Button variant="primary" type="submit" className="me-2">
            Submit
          </Button>
          <Button variant="secondary" type="button" onClick={handleReset}>
            Reset
          </Button>

        </Form>
        <ToastContainer />
      </div>
    </>
  );


export default Register;

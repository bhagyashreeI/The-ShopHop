import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {APIURL} from '../../constants/global';

export default function Login (props) {
  let loginurl = APIURL + '/auth/login';

  const [show, setShow] = useState (false);
  const [inputValues, setLogin] = useState ({
    isLogin:false,
    email:'',
    password:''
  });

  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);

  const handleInput = (e) =>{
    setLogin({...inputValues, [e.target.name]: e.target.value})
  }

  const handleLogin = (e) => {
   // setShow (false);
   // return false;
   e.preventDefault();
    let formdata = new FormData();
    formdata.append("email", inputValues.email);
    formdata.append("password", inputValues.password);
    formdata.append("remember_me", "0");

    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch (loginurl,requestOptions)
      .then (res => {
        console.log ('res22', res.status);
        if(res.status == 200){
          let logindata = res.json;
          localStorage.setItem("auth_token",logindata.access_token);
          setLogin({...inputValues, isLogin: true})
          setShow (false);
        }else{
          alert("Invalid credentials");
          return false;
        }
      })
      
      .catch (err => console.log ('err', err));
  };

  return (
    <div>
      {!inputValues.isLogin && <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0 float-right"
        data-toggle="modal"
        data-target="#myModal"
        onClick={handleShow}
      >
        Login
      </button>}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleInput} value={inputValues.email} placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleInput} value={inputValues.password} placeholder="*****" />
            </Form.Group>
            <Button type="submit" variant="primary">
            Login
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>

    </div>
  );
}

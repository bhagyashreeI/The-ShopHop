import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {APIURL} from '../../constants/global';
import AuthCheck from '../../Services/AuthCheck';
import useAuthCheck, {userAuthCheck} from './../../useAuthCheck'

export default function Login ({ setToken }) {
  let loginurl = APIURL + '/auth/login';
  let user_token = localStorage.getItem("auth_token");

  const [show, setShow] = useState (false);
  const [inputValues, setLogin] = useState ({
    isLogin:false,
    email:'',
    password:'',
    error_list:[],
    warningmsg:''
  });

  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);

  const handleInput = (e) =>{
    setLogin({...inputValues, [e.target.name]: e.target.value})
  }

  const handleLogin = (e) => {
   e.preventDefault();


    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: inputValues.email,password:inputValues.password,remember_me:0 })
    };
    fetch (loginurl,requestOptions)
      .then (async res => {
        console.log("resp",await res.status)
          const resp = await res.json();
          console.log("resp",resp)
          let api_status = resp.status;
          console.log("api_status",api_status)
          if(api_status === 200){
            localStorage.setItem("auth_token",resp.access_token);
            setToken(resp.access_token);
            setLogin({...inputValues, isLogin: true,error_list:[],warningmsg:''})
            setShow (false);
          }else if(api_status === 401){
            setLogin({...inputValues,warningmsg:resp.message,error_list:[]})
          }else{
            setLogin({...inputValues,error_list:resp.errors,warningmsg:''})
          }
         
        
      })
      
      .catch (err => console.log ('err', err));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    let requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',"Authorization" : `Bearer ${user_token}` }
    };
    fetch(APIURL+"/auth/logout",requestOptions).then(res => {
      localStorage.removeItem('auth_token');
      user_token = localStorage.getItem('auth_token');
      setToken(null);
      setLogin({...inputValues,isLogin:false})
      
    }).catch (err => console.log ('err', err));
  }

  return (
    <div>
      {user_token == null && <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0 float-right"
        data-toggle="modal"
        data-target="#myModal"
        onClick={handleShow}
      >
        Login
      </button>}
      {user_token != null && <button
        type="button"
        onClick={handleLogout}
        className="btn btn-outline-primary my-2 my-sm-0 float-right"
       
      >
        Logout
      </button>}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" name="email" onChange={handleInput} value={inputValues.email} placeholder="name@example.com" />
              <span className="text-danger" >{inputValues.error_list.email}</span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleInput} value={inputValues.password} placeholder="*****" />
              <span className="text-danger">{inputValues.error_list.password}</span>
            </Form.Group>
            <span className="text-danger text-center p-2 m-2 ">{inputValues.warningmsg}</span>
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

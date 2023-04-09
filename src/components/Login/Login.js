import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {APIURL} from '../../constants/global';

export default function Login (props) {
  let loginurl = APIURL + '/auth/login';

  const [show, setShow] = useState (false);

  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);

  const handleLogin = () => {
    setShow (false);
    return false;
    fetch (loginurl,{
      method: 'POST',
      body: JSON.stringify ({
        username: 'johnd',
        password: 'm38rmF$',
      }),
    })
      .then (res => res.json ())
      .then (json => console.log ('ffff', json))
      .catch (err => console.log ('sdfsdfs', err));
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success my-2 my-sm-0 float-right"
        data-toggle="modal"
        data-target="#myModal"
        onClick={handleShow}
      >
        Login
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*****" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

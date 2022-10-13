import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import { register } from './../../redux/operations';
function AuthForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    e.target.reset();
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AuthForm;

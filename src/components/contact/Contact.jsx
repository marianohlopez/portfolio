import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import configParams from '../../config/config';

const Contact = () => {

  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(configParams.SERVICE_ID, configParams.TEMPLATE_ID, form.current, configParams.API_KEY)
      .then(() => {
        alert('¡El mensaje ha sido enviado con éxito!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
        alert('Ocurrió un error al enviar el mensaje.');
      });
  };

  return (
    <Container>
      <h3 id='contact' className="title">Contacto</h3>
      <Row className="justify-content-center">
        <Col xs={11} lg={7}>
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group controlId="form.ControlInput1">
              <Form.Control className='mt-3'
                type="text"
                name='user_name'
                placeholder="Nombre"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group controlId="form.ControlInput2">
              <Form.Control className='mt-3'
                type="email"
                name='user_email'
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="form.ControlTextarea1">
              <Form.Control className='mt-3'
                as="textarea"
                name='message'
                rows={5}
                value={message}
                onChange={handleMessageChange}
                placeholder="Mensaje"
              />
            </Form.Group>
            <Button className='mt-2' variant="outline-warning" type="submit">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
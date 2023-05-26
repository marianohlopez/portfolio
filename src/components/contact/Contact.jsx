import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const Contact = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tu-email@gmail.com',
        pass: 'tu-contraseña',
      },
    });

    const mailOptions = {
      from: 'tu-email@gmail.com',
      to: 'tudireccion@email.com',
      subject: 'Nuevo mensaje de formulario',
      html: `
            <h3 style="color: blue;">Email del cliente: ${order.email}</h3>
            <h4>Orden nº: ${order.order}</h4>
            <h4>Fecha y hora: ${order.time}</h4>
            <h4>Mensaje:</h4>
            <p>${message}</p>`,
      text: `Email: ${email}\n\nMensaje: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });

    setEmail('');
    setMessage('');
  };

  return (
    <Container>
      <h3 className="title">Contacto</h3>
      <Row className="justify-content-center">
        <Col xs={11} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="form.ControlInput1">
              <Form.Control className='mt-3'
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group controlId="form.ControlInput2">
              <Form.Control className='mt-3'
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="form.ControlTextarea1">
              <Form.Control className='mt-3'
                as="textarea"
                rows={3}
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
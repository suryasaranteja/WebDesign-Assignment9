import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Contact = () => {
  const contactMethods = [
    { type: 'Email', address: 'info@example.com' },
    { type: 'Phone', number: '+1 (123) 456-7890' },
    { type: 'Address', location: '123 Main Street, Cityville, USA' },
  ];

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Card.Text>
            Feel free to reach out to us. We are here to assist you.
          </Card.Text>

          <div className="row mt-4">
            {contactMethods.map((contact, index) => (
              <div key={index} className="col-md-4">
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{contact.type}</Card.Title>
                    {contact.address && <Card.Text>{contact.address}</Card.Text>}
                    {contact.number && <Card.Text>{contact.number}</Card.Text>}
                    {contact.location && <Card.Text>{contact.location}</Card.Text>}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;

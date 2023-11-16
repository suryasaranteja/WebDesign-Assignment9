import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Our Website!</h1>
        <p className="lead">Explore what we have to offer and discover amazing opportunities.</p>
        <hr className="my-4" />
        <p>Ready to get started? Sign in to access exclusive content.</p>

        <div className="row mt-5">
          <div className="col-md-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Explore Opportunities</Card.Title>
                <Card.Text>
                  Discover a world of exciting opportunities. Our platform opens doors to new experiences and possibilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Exclusive Content</Card.Title>
                <Card.Text>
                  Access exclusive content only available to our members. Stay updated with the latest insights and resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Community Engagement</Card.Title>
                <Card.Text>
                  Engage with a vibrant community of like-minded individuals. Share ideas, collaborate, and grow together.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;

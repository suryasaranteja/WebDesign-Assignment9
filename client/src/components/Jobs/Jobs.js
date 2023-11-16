import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Jobs = () => {
  const jobListings = [
    { title: 'Frontend Developer', location: 'Cityville', requirements: 'React, JavaScript, HTML, CSS' },
    { title: 'Backend Developer', location: 'Techland', requirements: 'Node.js, Express, MongoDB' },
    { title: 'UI/UX Designer', location: 'Designville', requirements: 'UI/UX design skills, Adobe Creative Suite' },
  ];

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Job Opportunities</Card.Title>
          <Card.Text>
            Explore exciting job opportunities with us. Join our team and contribute to innovative projects.
          </Card.Text>

          <div className="row mt-4">
            {jobListings.map((job, index) => (
              <div key={index} className="col-md-4">
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>Location: {job.location}</Card.Text>
                    <Card.Text>Requirements: {job.requirements}</Card.Text>
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

export default Jobs;

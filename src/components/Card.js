import React from 'react'
import Card from 'react-bootstrap/Card'

const CardComponent = () => {
    
    return (
        <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title>About your Car</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
    <Card.Text>
      My car is red!
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    )
}

const card = 'Test card';

export default CardComponent

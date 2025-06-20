import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="App bg-light min-vh-100">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="OctoFit Logo" width="40" height="40" className="d-inline-block align-top me-2" />
            OctoFit Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#activities">Activities</Nav.Link>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={handleShow}>Log Activity</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1 className="display-4 mb-4 text-primary">Welcome to OctoFit Tracker</h1>
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Student Progress</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Activity</th>
                  <th>Points</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alex</td>
                  <td>Running</td>
                  <td>120</td>
                  <td><span className="badge bg-success">Active</span></td>
                </tr>
                <tr>
                  <td>Jamie</td>
                  <td>Walking</td>
                  <td>80</td>
                  <td><span className="badge bg-warning text-dark">Needs Motivation</span></td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" className="me-2">View Leaderboard</Button>
            <Button variant="secondary">View Teams</Button>
          </Card.Body>
        </Card>
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title>Monthly Challenge</Card.Title>
            <Card.Text>
              Join the June Fitness Challenge and earn extra points for your team!
            </Card.Text>
            <Button variant="success">Join Challenge</Button>
          </Card.Body>
        </Card>
        <a className="btn btn-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn more about React
        </a>
      </Container>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log New Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formActivityType">
              <Form.Label>Activity Type</Form.Label>
              <Form.Select>
                <option>Running</option>
                <option>Walking</option>
                <option>Strength Training</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPoints">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" placeholder="Enter points" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;

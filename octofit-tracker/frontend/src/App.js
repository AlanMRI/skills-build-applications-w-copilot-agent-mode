import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from './logo.svg';
import octofitLogo from '../public/octofitapp-small.png';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Router>
      <div className="App bg-light min-vh-100">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={octofitLogo} alt="OctoFit Logo" className="App-logo d-inline-block align-top" />
              OctoFit Tracker
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
                <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
                <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                <Nav.Link as={Link} to="/users">Users</Nav.Link>
                <Nav.Link as={Link} to="/workouts">Workouts</Nav.Link>
              </Nav>
              <Button variant="outline-light" onClick={handleShow}>Log Activity</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <>
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
                    <Button as={Link} to="/leaderboard" variant="primary" className="me-2">View Leaderboard</Button>
                    <Button as={Link} to="/teams" variant="secondary">View Teams</Button>
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
              </>
            } />
          </Routes>
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
    </Router>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Table, Spinner, Card, Button } from 'react-bootstrap';

const CODESPACE_URL = 'https://symmetrical-funicular-jjj65vr4prr4hqqrq.github.dev-8000.app.github.dev/api/users';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title as="h2" className="mb-3 text-primary">Users</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" className="mt-3" href="/activities">View Activities</Button>
      </Card.Body>
    </Card>
  );
}

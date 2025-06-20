import { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';

const CODESPACE_URL = 'https://symmetrical-funicular-jjj65vr4prr4hqqrq.github.dev-8000.app.github.dev/api/workouts';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then(res => res.json())
      .then(data => {
        setWorkouts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h2 className="mb-3">Workouts</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(w => (
            <tr key={w.id}>
              <td>{w.id}</td>
              <td>{w.user}</td>
              <td>{w.type}</td>
              <td>{w.duration}</td>
              <td>{w.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';

const CODESPACE_URL = 'https://symmetrical-funicular-jjj65vr4prr4hqqrq.github.dev-8000.app.github.dev/api/activities';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then(res => res.json())
      .then(data => {
        setActivities(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h2 className="mb-3">Activities</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Points</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.type}</td>
              <td>{a.points}</td>
              <td>{a.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

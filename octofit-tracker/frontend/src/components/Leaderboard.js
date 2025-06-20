import { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';

const CODESPACE_URL = 'https://symmetrical-funicular-jjj65vr4prr4hqqrq.github.dev-8000.app.github.dev/api/leaderboard';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then(res => res.json())
      .then(data => {
        setLeaders(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h2 className="mb-3">Leaderboard</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((l, i) => (
            <tr key={l.id}>
              <td>{i + 1}</td>
              <td>{l.name}</td>
              <td>{l.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

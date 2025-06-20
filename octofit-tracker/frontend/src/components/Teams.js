import { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';

const CODESPACE_URL = 'https://symmetrical-funicular-jjj65vr4prr4hqqrq.github.dev-8000.app.github.dev/api/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then(res => res.json())
      .then(data => {
        setTeams(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h2 className="mb-3">Teams</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(t => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.members}</td>
              <td>{t.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

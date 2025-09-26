import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Fetched Leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);
  return (
    <div className="mb-4">
      <h2 className="mb-3 text-success">Leaderboard</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {leaders.length === 0 ? (
                <tr><td colSpan="4" className="text-center">No leaders found.</td></tr>
              ) : (
                leaders.map((leader, idx) => (
                  <tr key={leader.id || idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{leader.name || '-'}</td>
                    <td>{leader.score || '-'}</td>
                    <td>{leader.details || JSON.stringify(leader)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;

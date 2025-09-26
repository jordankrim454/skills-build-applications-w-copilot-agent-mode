import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched Users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);
  return (
    <div className="mb-4">
      <h2 className="mb-3 text-warning">Users</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan="4" className="text-center">No users found.</td></tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={user.id || idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{user.name || '-'}</td>
                    <td>{user.email || '-'}</td>
                    <td>{user.details || JSON.stringify(user)}</td>
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
export default Users;

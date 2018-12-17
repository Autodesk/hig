import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ routes }) {
  return (
    <nav>
      <ul style={{ display: "flex" }}>
        {routes.map(r => (
          <div key={r.path} style={{ padding: "4px" }}>
            <Link to={r.path}>{r.label}</Link>
          </div>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;

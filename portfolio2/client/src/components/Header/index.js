import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="brand">
            <h3>FindMovies</h3>
          </div>

          <ul className="nav-links">
            <li>
              <p>Watch List</p>
            </li>

            <li>
              <p>Watched</p>
            </li>

            <li>
              <button className="btn btn-main">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
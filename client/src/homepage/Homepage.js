import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";
import AuthorSearchForm from "../routes-nav/AuthorSearchForm";
import WorkSearchForm from "../routes-nav/WorkSearchForm";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">BookFriend</h1>
          <img className="mx-auto h-30 p-0 m-0 pt-0" src="./bookfriendimg1.png" alt="BookFriend" />
          <p className="lead">Search for your favorite authors and books information.</p>
          {currentUser
              ? <h2>
                Welcome Back, {currentUser.firstName || currentUser.username}! <div>
                <Link className="btn btn-info mr-4 mt-4 mb-4" to="/authors">Authors </Link>
                <Link className="btn btn-info mr-4 mt-4 mb-4" to="/works"> Works</Link>
                </div>
              </h2>

              : (
                  <p>

                    <Link className="btn btn-primary font-weight-bold mr-3"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/signup">
                      Sign up
                    </Link>
                  </p>
              )}

        </div>
      </div>
  );
}

export default Homepage;

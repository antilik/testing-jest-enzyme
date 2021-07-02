import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { changeAuth } from "actions";

import "./App.css";

const App = () => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const renderButton = () => {
    const changeAuthHandler = (isAuth) => dispatch(changeAuth(isAuth));

    return auth ? (
      <button onClick={() => changeAuthHandler(false)}>Sign Out</button>
    ) : (
      <button onClick={() => changeAuthHandler(true)}>Sign In</button>
    );
  };

  const renderHeader = () => {
    return (
      <ul className="nav-list__container">
        <li className="nav-list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/post">Post a Comment</Link>
        </li>
        <li className="nav-list__item">{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      <>{renderHeader()}</>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Link to="/signup" className="auth-button signup">Sign Up</Link>
      <Link to="/signin" className="auth-button signin">Sign In</Link>
    </div>
  );
};

export default AuthButtons;

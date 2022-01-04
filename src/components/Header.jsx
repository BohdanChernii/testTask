import React, { useState } from 'react';
import Aunthentification from './Aunthentification';
import { Link } from 'react-router-dom';
const Header = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <header className="header">
      <p>
        <Link className="name" to="/">
          Film posters{' '}
        </Link>
      </p>

      <Aunthentification />
    </header>
  );
};
export default Header;

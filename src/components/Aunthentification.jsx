import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import { useForm } from 'react-hook-form';
import { fetchUser, postUser } from '../gateway';
import { user } from './user.js';
const Aunthentification = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useState(false);
  const handleSignIn = () => {
    setSignIn(!signIn);
  };
  const handleSignUp = () => {
    setSignUp(!signUp);
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmitRegistration = (data) => {
    setSignUp(!signUp);
    postUser(data).then((result) =>
      JSON.stringify(localStorage.setItem('user', JSON.stringify(result)))
    );
  };

  const onSubmitLogin = (data) => {
    setSignIn(!signIn);
    fetchUser().then((result) => setUsers(result));
    location.reload();
  };
  users.filter((item) => {
    if (item.email === user.email && item.password === user.password) {
      return setAuth(true);
    }
  });

  return (
    <>
      {!user && !auth ? (
        <div className="home__info">
          <Button
            value="Sign In"
            className="home__info-item"
            setActive={handleSignIn}
          ></Button>
          <Button
            value="Sign Up"
            className="home__info-item"
            setActive={handleSignUp}
          ></Button>
        </div>
      ) : (
        <p className="home__info-item">{user.name}</p>
      )}
      {signIn && (
        <Modal active={signIn} setActive={setSignIn}>
          <form onSubmit={handleSubmit(onSubmitLogin)} className="form">
            <label>Email</label>
            <input
              type="text"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
            <label>Password</label>
            <input
              type="text"
              {...register('password', {
                required: 'this field required',
                minLength: {
                  value: 6,
                  message: 'Please enter minimum 6 values',
                },
                pattern: {
                  value:
                    /\d+/g &&
                    /^[A-Z]/ &&
                    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
                  message: 'Invalid Password',
                },
              })}
            />
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
            <input type="submit" disabled={!isValid} />
          </form>
        </Modal>
      )}
      {signUp && (
        <Modal active={signUp} setActive={setSignUp}>
          <form onSubmit={handleSubmit(onSubmitRegistration)} className="form">
            <label>Name</label>
            <input
              type="text"
              {...register('name', {
                required: true,
              })}
            />
            <label>Email</label>
            <input
              type="text"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
            <label>Password</label>
            <input
              type="text"
              {...register('password', {
                required: 'this field required',
                minLength: {
                  value: 6,
                  message: 'Please enter minimum 6 values',
                },
                pattern: {
                  value:
                    /\d+/g &&
                    /^[A-Z]/ &&
                    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
                  message: 'Invalid Password',
                },
              })}
            />
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
            <input type="submit" disabled={!isValid} />
          </form>
        </Modal>
      )}
    </>
  );
};
export default Aunthentification;

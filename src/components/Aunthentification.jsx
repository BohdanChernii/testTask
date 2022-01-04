import React, { useState } from 'react';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import { useForm } from 'react-hook-form';
import { user, loginUser } from './user.js';
const Aunthentification = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

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
    localStorage.setItem('user', JSON.stringify(data));
    setSignUp(!signUp);
  };
  const onSubmitLogin = (data) => {
    localStorage.setItem('logUser', JSON.stringify(data));
    setSignIn(!signIn);
  };

  return (
    <>
      {loginUser.email !== user.email &&
      loginUser.password !== user.password ? (
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

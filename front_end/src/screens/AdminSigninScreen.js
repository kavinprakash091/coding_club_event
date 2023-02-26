import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import '../styles/SigninScreen.css';

export default function AdminSigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { isAdmin } = state;
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === 'ccc.23cse@kongu.edu' && password === 'kongu@2022') {
      localStorage.setItem('isAdmin', true);
      ctxDispatch({ type: 'ADMIN', payload: true });
      navigate('/admin');
    } else {
      toast.error('Invalid Credentials!');
    }
  };

  return (
    <div className="sign-in-page">
      <div className="register-form-container">
        <div className="admin-overlay"> </div>{' '}
        <form className="register-form admin-signin" onSubmit={submitHandler}>
          <div className="input-field-tags">
            <label>
              {' '}
              Email <div className="required-element"> * </div>{' '}
            </label>{' '}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-fields"
              required
            />
          </div>{' '}
          <div className="input-field-tags">
            <label>
              {' '}
              Password <div className="required-element"> * </div>{' '}
            </label>{' '}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-fields"
              required
            />
          </div>{' '}
          <button type="submit" className="register-button">
            Sign in{' '}
          </button>{' '}
        </form>{' '}
      </div>{' '}
      <div className="shape">
        <div className="floor">
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>{' '}
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>{' '}
        </div>{' '}
        <div className="floor">
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>{' '}
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>{' '}
        </div>{' '}
        <div className="floor">
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>{' '}
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>
          <div className="row">
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
            <span className="cube"> 🧊 </span>{' '}
          </div>{' '}
        </div>{' '}
        <div className="floor">
          <div className="row">
            <span className="cube"> </span>{' '}
            <span className="cube">
              <span className="content">
                <h2> C </h2> <h2> C </h2>{' '}
              </span>{' '}
            </span>{' '}
            <span className="cube"> </span>{' '}
          </div>{' '}
          <div className="row">
            <span className="cube"> </span> <span className="cube"> </span>{' '}
            <span className="cube">
              <span className="content">
                <h2> C </h2> <h2> C </h2>{' '}
              </span>{' '}
            </span>{' '}
          </div>
          <div className="row">
            <span className="cube">
              <span className="content">
                <h2> C </h2> <h2> C </h2>{' '}
              </span>{' '}
            </span>{' '}
            <span className="cube"> </span> <span className="cube"> </span>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

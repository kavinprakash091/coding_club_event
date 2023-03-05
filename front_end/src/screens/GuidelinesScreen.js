import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/GuidelinesScreen.css';

export default function GuidelinesScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <section className="guidelines-container">
      <div className="black-overlay1"> </div>{' '}
      <div class="bubble bubble--1"> </div>{' '}
      <div class="bubble bubble--2"> </div>{' '}
      <div class="bubble bubble--3"> </div>{' '}
      <div class="bubble bubble--4"> </div>{' '}
      <div class="bubble bubble--5"> </div>{' '}
      <div class="bubble bubble--6"> </div>{' '}
      <div class="bubble bubble--7"> </div>{' '}
      <div class="bubble bubble--8"> </div>{' '}
      <div class="bubble bubble--9"> </div>{' '}
      <div class="bubble bubble--10"> </div>{' '}
      <div class="bubble bubble--11"> </div>{' '}
      <div class="bubble bubble--12"> </div>{' '}
      <div className="guidelines">
        <div className="loader">
          <h1> Instructions: - </h1>{' '}
        </div>{' '}
        <ul className="guideline-points">
          <li> Read the instructions carefully🧐. </li>{' '}
          <li> Total seven questions and the duration is⏰ 01: 30: 00 hrs. </li>{' '}
          <li>
            Enter the contest by clicking👆 the button 'Tap to code' below👇.{' '}
          </li>{' '}
          <li> Enter your details correctly✔. </li>{' '}
          <li> After submitting your details 1 st question is displayed. </li>{' '}
          <li>
            The passwords for the further questions is that output of the
            current question🔐.{' '}
          </li>{' '}
          <li>
            The input for the password is given by respective event -
            coordinators after verifying certain testcases.{' '}
          </li>{' '}
        </ul>{' '}
        <div className="get-started-button-container">
          {' '}
          {userInfo ? (
            <Link to="/stage1" className="get-started-button">
              Tap to Code <i className="fa-solid fa-arrow-right arrows"> </i>{' '}
            </Link>
          ) : (
            <Link
              to="/signin
            "
              className="get-started-button"
            >
              Tap to Code <i className="fa-solid fa-arrow-right arrows"> </i>{' '}
            </Link>
          )}{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

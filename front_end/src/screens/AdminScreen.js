import React, { useState } from 'react';
import '../styles/AdminScreen.css';

export default function AdminScreen() {
  const [stage, setStage] = useState(0);
  return (
    <section className="admin-page">
      <header className="admin-header"> ADMIN </header>{' '}
      <section className="stage-button-container">
        <button
          className={
            stage === 0 ? 'stage-button btn0 stage-active' : 'stage-button btn0'
          }
          onClick={() => setStage(0)}
        >
          {' '}
          Login Count{' '}
        </button>{' '}
        <button
          className={
            stage === 1 ? 'stage-button btn1 stage-active' : 'stage-button btn1'
          }
          onClick={() => setStage(1)}
        >
          {' '}
          Stage 1{' '}
        </button>{' '}
        <button
          className={
            stage === 2 ? 'stage-button btn2 stage-active' : 'stage-button btn2'
          }
          onClick={() => setStage(2)}
        >
          {' '}
          Stage 2{' '}
        </button>{' '}
        <button
          className={
            stage === 3 ? 'stage-button btn3 stage-active' : 'stage-button btn3'
          }
          onClick={() => setStage(3)}
        >
          {' '}
          Stage 3{' '}
        </button>{' '}
        <button
          className={
            stage === 4 ? 'stage-button btn4 stage-active' : 'stage-button btn4'
          }
          onClick={() => setStage(4)}
        >
          {' '}
          Stage 4{' '}
        </button>{' '}
        <button
          className={
            stage === 5 ? 'stage-button btn5 stage-active' : 'stage-button btn5'
          }
          onClick={() => setStage(5)}
        >
          {' '}
          Stage 5{' '}
        </button>{' '}
        <button
          className={
            stage === 6 ? 'stage-button btn6 stage-active' : 'stage-button btn6'
          }
          onClick={() => setStage(6)}
        >
          {' '}
          Stage 6{' '}
        </button>{' '}
        <button
          className={
            stage === 7 ? 'stage-button btn7 stage-active' : 'stage-button btn7'
          }
          onClick={() => setStage(7)}
        >
          {' '}
          Stage 7{' '}
        </button>{' '}
      </section>{' '}
      <main className="stage-table-container">
        <table className="stage-table">
          <tr>
            <th> S.No </th> <th> Name </th> <th> Roll No </th> <th> Email </th>{' '}
            <th> Time </th>{' '}
          </tr>{' '}
          <tr>
            {' '}
            <td> 1 </td> <td> Kavin P </td> <td> 20CSR091 </td>{' '}
            <td> kavinp .20 cse @kongu.edu </td> <td> 10.00 </td>{' '}
          </tr>{' '}
        </table>{' '}
      </main>{' '}
    </section>
  );
}

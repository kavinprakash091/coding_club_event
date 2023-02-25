import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/QuestionScreen.css';

export default function Question1Screen() {
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="question-page">
      <header className="question-header"> Question 1 </header>{' '}
      <main className="question-container">
        <div className="question-description">
          <p>
            There was a Mysterious World in which People always try to collect
            as many possible gem stones for their energy and good life. Two
            friends are seventeen years old named one is YunShu and another one
            is Zhang. One day, YunShu found that Zhang has many hidden gem
            stones. YunShu wanted to own every hidden gem stones but robbery was
            strictly restricted. So, he trickily created a game. But he doesn’t
            know the result yet he tried and invites Zhang to play with him. The
            game was: Firstly, Yunshu has A number of gem stones and Zhang has B
            number of gem stones. In the first Move, Zhang has to give YunShu 1
            gemStone. In second move, YunShu has to give Zhang 2 gem stones. In
            third move, Zhang has to give YunShu 3 gem stones. In Fourth move,
            YunShu has to give Zhang 4 gem stones and the game continues till
            one of them cannot make a move. The one who can’t make a move loses
            and had to all the gem stones he collected. Your task is to find who
            own all the Hidden gem stone and is the password .
          </p>
        </div>{' '}
        <div className="format">
          <h3>INPUT:-</h3>
          <p>Input contains two integers A and B.</p>
          <h3>CONSTRAINTS:-</h3>
          <p>0 &lt; A ,B &lt; 10^15</p>
          <h3>OUTPUT:-</h3>
          <p>
            Print “ YunShu ” if YunShu wins the game and “ Zhang ” if Zhang wins
            the game.
          </p>
        </div>
        <div className="sample-input">
          <h3>SAMPLE INPUT:-</h3>
          <p>2 1 </p>
          <h3>SAMPLE OUTPUT:-</h3>
          <p>YunShu</p>
          <h3>EXPLANATION:-</h3>
          <p>
            In first move Zhang gives 1 gem to YunShu so, YunShu has 3 gems and
            Zhang has 0 gem. In second move YunShu gives 2 gems to Zhang so,
            YunShu has 1 gem and Zhang has 2 gems. In third move Zhang need to
            give 3 gems to YunShu but Zhang has only 2 gems now, he cannot able
            to make his move so , Zhang loses the game.
          </p>
        </div>
      </main>
      <section className="stage-form-container">
        <form className="stage-form" onSubmit={submitHandler}>
          <div className="input-field-tags">
            <label>
              {' '}
              Password <div className="required-element"> * </div>{' '}
            </label>{' '}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-fields stage-input-fields"
              required
            />
          </div>{' '}
          <button type="submit" className="continue-button">
            Continue{' '}
          </button>{' '}
        </form>
        <div className="coding-image-container">
          <img src={require('../assets/coding.gif')} alt="Coding" />
        </div>
      </section>
      <section className="pagination-button-container">
        <Link to="/" className="previous-button">
          <i className="fa-solid fa-angles-left left-arrow"></i> Previous
        </Link>
        <Link to="/stage2" className="next-button">
          Next <i className="fa-solid fa-angles-right right-arrow"></i>
        </Link>
      </section>
    </section>
  );
}
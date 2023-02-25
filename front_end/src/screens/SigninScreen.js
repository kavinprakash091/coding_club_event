import React, { useState } from 'react';
import '../styles/SigninScreen.css';

export default function SigninScreen() {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');

  const registerHandler = (e) => {
    e.preventDefault();
    alert(
      rollno +
        ' ' +
        name +
        ' ' +
        email +
        ' ' +
        department +
        ' ' +
        year +
        ' ' +
        section
    );
  };

  return (
    <div className="sign-in-page">
      <div className="register-form-container">
        <div className="overlay"></div>
        <form className="register-form" onSubmit={registerHandler}>
          <div className="input-field-tags">
            <label>
              {' '}
              Rollno <div className="required-element">*</div>{' '}
            </label>{' '}
            <input
              type="text"
              onChange={(e) => setRollno(e.target.value)}
              className="input-fields"
              required
            />{' '}
          </div>{' '}
          <div className="input-field-tags">
            <label>
              {' '}
              Name <div className="required-element">*</div>{' '}
            </label>{' '}
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input-fields"
              required
            />{' '}
          </div>
          <div className="input-field-tags">
            <label>
              {' '}
              Email <div className="required-element">*</div>{' '}
            </label>{' '}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-fields"
              required
            />{' '}
          </div>
          <div className="input-field-tags">
            <label>
              {' '}
              Department <div className="required-element">*</div>{' '}
            </label>{' '}
            <select onChange={(e) => setDepartment(e.target.value)}>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Mechatronics Engineering">
                Mechatronics Engineering
              </option>
              <option value="Automobile Engineering">
                Automobile Engineering
              </option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Food Technology">Food Technology</option>
              <option value="Electrical and Electronics Engineering">
                Electrical and Electronics Engineering
              </option>
              <option value="Electronics and Instrumentation Engineering">
                Electronics and Instrumentation Engineering
              </option>
              <option value="Electrical and Communication Engineering">
                Electrical and Communication Engineering
              </option>
              <option value="B.Sc Computer Systems and Design">
                B.Sc Computer Systems and Design
              </option>
              <option value="B.Sc Information Systems">
                B.Sc Information Systems
              </option>
              <option value="B.Sc Software Systems">
                B.Sc Software Systems
              </option>
              <option value="M.Sc Software Systems">
                M.Sc Software Systems
              </option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="CT-UG">CT-UG</option>
              <option value="CT-PG">CT-PG</option>
            </select>{' '}
          </div>
          <div className="input-field-tags">
            <label>
              {' '}
              Year <div className="required-element">*</div>{' '}
            </label>{' '}
            <select onChange={(e) => setYear(e.target.value)}>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
            </select>
          </div>
          <div className="input-field-tags">
            <label>
              {' '}
              Section <div className="required-element">*</div>{' '}
            </label>{' '}
            <select type="text" onChange={(e) => setSection(e.target.value)}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
      <div className="shape">
        <div className="floor">
          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>
          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>

          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>
        </div>
        <div className="floor">
          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>
          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>

          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>
        </div>
        <div className="floor">
          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>
          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>

          <div className="row">
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
            <span className="cube">🧊</span>
          </div>
        </div>
        <div className="floor">
          <div className="row">
            <span className="cube"></span>
            <span className="cube">
              <span className="content">
                <h2>C</h2>
                <h2>C</h2>
              </span>
            </span>
            <span className="cube"></span>
          </div>
          <div className="row">
            <span className="cube"></span>
            <span className="cube"></span>
            <span className="cube">
              <span className="content">
                <h2>C</h2>
                <h2>C</h2>
              </span>
            </span>
          </div>

          <div className="row">
            <span className="cube">
              <span className="content">
                <h2>C</h2>
                <h2>C</h2>
              </span>
            </span>
            <span className="cube"></span>
            <span className="cube"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
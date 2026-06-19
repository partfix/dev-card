import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react';
import data from "./example/data.js"
import { skillsArr, profiler } from './example/skillsArr.js';
import Accordion from './components/Accordion.jsx';
import Avatar from './components/Avatar.jsx';


function App() {
  return (
    <div className="container">
      <div className="card">
        <Avatar name='John Dev' photoPath='pfp/sdf.jpg' />
        <div className="data">
          <Intro name='John' intro='Aspring Full Stack Web Developer, currently learning React. I also like the idea of Mobile Application and AI integration' />
          <SkillList />
        </div>
      </div>

      <div className="accordion">
        <Accordion res={data} />
      </div>
    </div>
  );
}

function Intro({ name, intro }) {
  const [adds, adder] = useState(0);

  function onMoving() {
    if (adds < 3) {
      adder(adds + 1)
    } else {
      adder(0)
    }
  }

  return (
    <main>
      <h1>{name}</h1>
      <p>{intro}</p>
      <button className='dsgn-btn' onClick={onMoving}>Click me</button>

      <span className={`promise ${adds === 0 ? "nothing" : ""}`}>{profiler[adds]}</span>
    </main >
  )
}

function SkillList() {
  const deferChecker = skillsArr;
  const defer = deferChecker.length;

  return (
    <div className='skill-list' >
      {defer ? (skillsArr.map((def) => <Skill skill={def.skill} color={def.color} levels={def.level} txtColor={def.textColor} key={def.skill} />)) : <PopMessage />}
    </div>
  )
}

function Skill({ skill, color, levels, txtColor }) {

  return (
    <div className='skill' style={{ backgroundColor: color, color: txtColor }}>
      <span>{skill}</span>
      <span>{levels === 'Beginner' && '👶🏻'}</span>
      <span>{levels === 'Intermediate' && '👍🏻'}</span>
      <span>{levels === 'Advance' && '💪🏻'}</span>
    </div>
  )
}

function PopMessage() {
  return (
    <span>You don't have data!</span>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App /></React.StrictMode>)
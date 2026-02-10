import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react';


const skillsArr = [
  {
    skill: "HTML",
    color: "orangered",
    textColor: "white",
    level: "Intermediate",

  },
  {
    skill: "CSS",
    color: "blue",
    textColor: "white",
    level: 'Intermediate',
  },
  {
    skill: "JavaScript",
    color: "yellow",
    textColor: "black",
    level: "Intermediate"

  },
  {
    skill: "React",
    color: "skyBlue",
    textColor: "black",
    level: "Beginner"
  },
  {
    skill: "Version Control",
    color: "black",
    textColor: "white",
    level: "Intermediate"

  },
  {
    skill: "PHP",
    color: "#B0B3D6",
    textColor: "white",
    level: "Beginner"
  },
  {
    skill: "Sql",
    color: "gray",
    textColor: "white",
    level: "Beginner"
  },
  {
    skill: "Web design",
    color: "violet",
    textColor: "black",
    level: "Advance"
  },
  {
    skill: "Figma/Design",
    color: "purple",
    textColor: "white",
    level: "Intermediate"
  },
];

const profiler = [
  "I'm john",
  "a webdevloper",
  "learning react",
  "to become a FULLSTACK dev"
]

function App() {
  return (

    <div className="card">
      <Avatar name='John Dev' photoPath='pfp/sdf.jpg' />
      <div className="data">
        <Intro name='John' intro='Aspring Full Stack Web Developer, currently learning React. I also like the idea of Mobile Application and AI integration' />
        <SkillList />
      </div>
    </div>


  );
}


function Avatar({ name, photoPath }) {
  return (
    <header>
      <img className='avatar' src={photoPath} alt={name}></img>
    </header>
  )
}

function Intro({ name, intro }) {
  const [adds, adder] = useState(0);


  function onMove() {
    if (adds < 3) {
      adder(adds + 1)
    }
  }

  return (
    <main>
      <h1>{name}</h1>
      <p>{intro}</p>
      <button style={{
        padding: "0.5em",
        marginTop: "0.5em", marginRight: "0.5em",
        backgroundColor: "#F8843F",
        border: "none", color: "khaki",
        borderRadius: "0.5rem",
        fontWeight: "bold"
      }}>Click me</button>

      <span style={{
        background: "green",
        color: "white",
        padding: "0.2rem",
        borderRadius: "0.2rem"
      }} onClick={onMove}>{profiler[adds]} </span>
    </main>
  )
}

function SkillList() {
  const deferChecker = skillsArr;
  const defer = deferChecker.length;


  return (
    <div className='skill-list' >
      {defer ? (skillsArr.map((def) => <Skill skill={def.skill} color={def.color} levels={def.level} txtColor={def.textColor} key={def.skill} />)) : <PopMessage />}
      {/*we check if the defer if it's true or false*/}
      {/*then we check the sample data {skillsArr}*/}
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

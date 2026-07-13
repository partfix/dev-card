import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import data from "./example/data.js"
import Accordion from './components/Accordion.jsx';
import Avatar from './components/Avatar.jsx';
import SkillList from './components/SkillList.jsx';
import { Intro } from './components/Intro.jsx';


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
        <Accordion res={data} /> {/*create resuable data */}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App /></React.StrictMode>)
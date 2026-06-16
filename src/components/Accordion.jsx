import React, { useState } from 'react';

export default function Accordion({ res }) {
  return (
    <div className='accordion'>
      {res && (res.map((item, index) => <Card title={item.header} desc={item.description} num={index} key={index} />))}
    </div>
  );
}
function Card({ title, desc, num }) {
  const [isOpen, setOpen] = useState(false);

  function handleToogle() {
    setOpen(isOpen => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <p className='number'>{num > 5 ? `0${num + 1}` : `0${num + 1}`}</p>
      <p className='title'>{title}</p>

      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className='content-box'>{desc}</div>}
    </div>
  );
}

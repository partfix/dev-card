import React, { useState } from 'react';
import Desc from './Desc';

export default function Accordion({ res }) {
	const [curOpen, setIsOpen] = useState(null);

	return (
		<div className='accordion'>
			{res &&
				res.map((item, index) => (
					<Card
						curOpen={curOpen}
						onOpen={setIsOpen}
						title={item.header}
						num={index}
						key={index}>
						{item.description}
						<Desc facts={item.facts} color={item.color} />
					</Card>
				))}
		</div>
	);
}

function Card({ title, num, curOpen, onOpen, children }) {
	const isOpen = num === curOpen;

	function handleToogle() {
		onOpen(isOpen ? null : num);
		/*this makes the other number go close*/
	}

	return (
		<div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToogle}>
			<p className='number'>{num > 5 ? `0${num + 1}` : `0${num + 1}`}</p>{' '}
			{/*condition to put 0 in every num (number) that greater than 5*/}
			<p className='title'>{title}</p>
			<p className='icon'>{isOpen ? '-' : '+'}</p>
			{isOpen && <div className='content-box'>{children}</div>}
		</div>
	);
}

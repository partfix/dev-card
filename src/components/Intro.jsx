import React, { useState } from 'react';
import { profiler } from '../example/skillsArr';

export function Intro({ name, intro }) {
	const [adds, adder] = useState(0);

	const dataHolder = profiler;
	const dataScraper = dataHolder.length;

	function onMoving() {
		//this is counter
		if (adds < 3) {
			adder(adds + 1);
		} else {
			adder(0);
		}
	}

	return (
		<main>
			<h1>{name}</h1>
			<p>{intro}</p>
			<button className='dsgn-btn' onClick={onMoving}>
				Click me
			</button>

			<span className={`promise ${adds === 0 ? 'nothing' : ''}`}>
				{dataScraper && dataHolder[adds]}
			</span>
		</main>
	);
}

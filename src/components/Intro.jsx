import React, { useState, Profiler } from 'react';

export function Intro({ name, intro }) {
	const [adds, adder] = useState(0);

	function onMoving() {
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
				{Profiler[adds]}
			</span>
		</main>
	);
}

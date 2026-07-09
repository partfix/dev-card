function Desc({ facts, color }) {
	return (
		<div className='skill-list'>
			<div className='skill' style={{ backgroundColor: color, color: 'white' }}>
				{facts}
			</div>
		</div>
	);
}

export default Desc;

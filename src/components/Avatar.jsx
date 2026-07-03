export default function Avatar({ name, photoPath }) {
	return (
		<header>
			<img className='avatar' src={photoPath} alt={name}></img>
		</header>
	);
}

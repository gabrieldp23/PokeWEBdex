import { Link } from 'react-router-dom';
import { BarContainer, IconsContainer, PokeballIcon } from './styles';

function NavBar({ colors = ['#cc1100', '#8b0000'], changePageTo, setSearch }) {
	const handleIconClick = () => {
		if (changePageTo) changePageTo(0); // go to initial page
		if (setSearch) setSearch(''); // reset search bar
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<BarContainer colors={colors}>
			<IconsContainer>
				<Link
					to="/"
					replace
					aria-label="Home"
					onClick={() => handleIconClick()}
				>
					<PokeballIcon />
				</Link>
			</IconsContainer>
		</BarContainer>
	);
}

export default NavBar;

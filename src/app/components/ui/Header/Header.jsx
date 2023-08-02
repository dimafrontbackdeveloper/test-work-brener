import Navigation from './Navigation/Navigation'
import style from './style.module.scss'

const Header = () => {
	return (
		<header className={style.header}>
			<Navigation />
		</header>
	)
}

export default Header

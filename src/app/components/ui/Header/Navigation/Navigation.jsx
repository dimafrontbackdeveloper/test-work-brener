import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Navigation = () => {
	return (
		<nav className={style.nav}>
			<ul>
				<li>
					{' '}
					<Link to={'/'}>home</Link>
				</li>
				<li>
					{' '}
					<Link to={'/vertical-scroll'}>vertical scroll</Link>
				</li>
				<li>
					{' '}
					<Link to={'/rectangles'}>rectangles</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation

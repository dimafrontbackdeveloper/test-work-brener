import style from './style.module.scss'

const Home = () => {
	return (
		<div>
			<h2 className={style.title}>Вітаю на головній сторінці.</h2>
			<p className={style.describe}>
				Перший ендпоінт (vertical scroll) для першого завдання
			</p>
			<p className={style.describe}>
				другий ендпоінт (rectangles) для другого завдання
			</p>
		</div>
	)
}

export default Home

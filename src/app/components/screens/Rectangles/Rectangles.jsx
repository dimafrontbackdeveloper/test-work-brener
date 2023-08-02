import styles from './style.module.scss'

const Rectangles = () => {
	const rectangles = [
		{
			title: 'sunt aut'
		},
		{
			title: 'Исполать Сон'
		},
		{
			title: 'Изранить Крючок'
		},
		{
			title: 'Сморгнуть Экология'
		},
		{
			title: 'Разбередить Сгибать'
		},
		{
			title: 'Беспрерывный Хулиганье'
		},

		{
			title: 'Деру Инвалидный'
		},
		{
			title: 'Вдогон Пуэрто-риканский'
		},
		{
			title: 'Гулливый Жгутик'
		},
		{
			title: 'Непрерывный Солянка'
		},
		{
			title: 'Беспамятство Обрешетка'
		},
		{
			title: 'Бездетный Неустрашимый'
		}
	]

	return (
		<div className={styles.container}>
			<ul className={styles.items}>
				{rectangles.map((rectangle, i) => {
					return (
						<li className={`${styles.item}`} key={`${i}__${rectangle.title}`}>
							{rectangle.title}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Rectangles

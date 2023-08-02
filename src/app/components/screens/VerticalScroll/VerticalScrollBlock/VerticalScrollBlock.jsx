import styles from './style.module.scss'

const VerticalScrollBlock = ({ title, body }) => {
	return (
		<div className={styles.block}>
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	)
}

export default VerticalScrollBlock

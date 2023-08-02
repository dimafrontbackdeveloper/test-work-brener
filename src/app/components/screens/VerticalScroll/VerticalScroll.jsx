import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import postsService from '../../../services/posts.service'
import VerticalScrollBlock from './VerticalScrollBlock/VerticalScrollBlock'
import styles from './style.module.scss'

const VerticalScroll = () => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)

	const scrollContainerRef = useRef()

	const {
		data: postsData,
		isLoading,
		error,
		refetch
	} = useQuery('imageBlocks', async () => {
		const postsData = await postsService.getPosts(page)
		return postsData.data
	})

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current

		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handledScrollContainerScroll)
		}
	}, [scrollContainerRef.current])

	useEffect(() => {
		if (postsData) {
			setPosts(prev => [...prev, ...postsData])
		}
	}, [postsData])

	useEffect(() => {
		refetch()
	}, [page])

	const handledScrollContainerScroll = async () => {
		const scrollContainer = scrollContainerRef.current
		const isScrollContainerScrolledToBottom =
			scrollContainer.scrollHeight - scrollContainer.scrollTop ===
			scrollContainer.clientHeight

		if (isScrollContainerScrolledToBottom) {
			setPage(prev => prev + 1)
		}
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>error: {error}</div>
	}

	return (
		<div className={styles.container}>
			<div className={styles.scrollContainer} ref={scrollContainerRef}>
				{posts &&
					posts.map(post => {
						return (
							<div key={post.id}>
								{' '}
								<VerticalScrollBlock title={post.title} body={post.body} />{' '}
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default VerticalScroll

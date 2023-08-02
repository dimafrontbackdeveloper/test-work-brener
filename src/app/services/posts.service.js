import instance, { API_URL } from '../api/interceptor'

const postsUrl = `${API_URL}/posts`

const postsService = {
	async getPosts(page, limit = 15) {
		return instance.get(`${postsUrl}?_page=${page}&_limit=${limit}`)
	},
}

export default postsService

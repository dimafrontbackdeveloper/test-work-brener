import axios from 'axios'

export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const API_URL = 'https://jsonplaceholder.typicode.com'

const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

export default instance

import axios from 'axios'

const token = localStorage.getItem('token')
const baseURL = process.env.API_URL
const headers = { Authorization: `Bearer ${token}` }

export default axios.create({ baseURL, headers })

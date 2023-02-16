import axios from 'axios'

const token = localStorage.getItem('token')
const baseURL = 'http://localhost:3002/api'
const headers = { Authorization: `Bearer ${token}` }

export default axios.create({ baseURL, headers })

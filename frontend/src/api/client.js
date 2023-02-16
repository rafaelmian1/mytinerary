import axios from 'axios'

const token = localStorage.getItem('token')
const baseURL = 'https://mytinerary.rafaelmiandev.com/api'
const headers = { Authorization: `Bearer ${token}` }

export default axios.create({ baseURL, headers })

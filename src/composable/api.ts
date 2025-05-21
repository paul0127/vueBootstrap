// src/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-api-url.com/api', // 可換成你實際的 API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api

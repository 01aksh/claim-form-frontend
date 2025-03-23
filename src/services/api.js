import axios from 'axios'

// Create an axios instance with default config
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error('Response error:', error.response.status, error.response.data)
      
      // Handle specific status codes
      if (error.response.status === 401) {
        // Handle unauthorized
        console.log('Unauthorized access')
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request)
    } else {
      // Something happened in setting up the request
      console.error('Error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

export default api
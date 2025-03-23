import { useState, useEffect } from 'react'
import api from '../services/api'

/**
 * Custom hook for making API requests
 * @param {string} url - The API endpoint
 * @param {Object} options - Request options
 * @returns {Object} - { data, loading, error, refetch }
 */
const useApi = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await api.request({
        url,
        ...options
      })
      setData(response.data)
      setError(null)
    } catch (err) {
      setError(err)
      setData(null)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    if (options.manual) return
    fetchData()
  }, [url])
  
  return { data, loading, error, refetch: fetchData }
}

export default useApi
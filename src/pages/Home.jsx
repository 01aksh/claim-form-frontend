import React from 'react'
import { useEffect, useState } from 'react'
import api from '../services/api'

const Home = () => {
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    // Example of how to use the API service
    // const fetchData = async () => {
    //   setLoading(true)
    //   try {
    //     const response = await api.get('/endpoint')
    //     console.log(response.data)
    //   } catch (error) {
    //     console.error('Error fetching data:', error)
    //   } finally {
    //     setLoading(false)
    //   }
    // }
    
    // fetchData()
  }, [])
  
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to React App</h1>
      <p className="text-lg mb-8">A modern React application with Tailwind CSS and Axios</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">React</h2>
          <p>A JavaScript library for building user interfaces</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Tailwind CSS</h2>
          <p>A utility-first CSS framework for rapid UI development</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Axios</h2>
          <p>Promise-based HTTP client for the browser and Node.js</p>
        </div>
      </div>
    </div>
  )
}

export default Home
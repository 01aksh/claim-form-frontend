import React, { createContext, useContext, useState } from 'react'

// Create context
const AppContext = createContext()

// Context provider component
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null)
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  
  // Login function
  const login = (userData) => {
    setUser(userData)
    // You could also store in localStorage here
  }
  
  // Logout function
  const logout = () => {
    setUser(null)
    // Clear localStorage if needed
  }
  
  // Context value
  const value = {
    theme,
    toggleTheme,
    user,
    login,
    logout
  }
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

export default AppContext
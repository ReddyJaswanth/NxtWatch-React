import React from 'react'

const ContextApi = React.createContext({
  savedVideosList: [],
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeActiveTab: () => {},
  addVideo: () => {},
})

export default ContextApi

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentList from './StudentsList'
import students from './students'
import Header from './Header'
import SquadList from './SqaudList'

function App() {

  return (
    <div className="App">
      <Header />
      <SquadList />
    </div>
  )
}

export default App

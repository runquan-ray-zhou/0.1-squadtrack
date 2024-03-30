import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentList from './StudentsList'
import students from './students'
import Header from './Header'

// const squadOne = [
//   { name: "Adeola Aina-Marshall",
//     score: 1},
//   { name: "Bryan Alcantara",
//     score: 1},
//   { name: "Adeola Aina-Marshall",
//     score: 1},
//   { name: "Jorge Godoy Rodriguez",
//     score: 1},
//   { name: "Patrick Rogers",
//     score: 1}
// ]

// const squadTwoFour = [
//   { name: "Ayyoub Belibel",
//     score: 1},
//   { name: "Nahida Niki Khanam",
//     score: 1},
//   { name: "Abdelrahman Sayedahmed",
//     score: 1},
//   { name: "Abraham Zambrano Tablante",
//     score: 1},
//   { name: "Runquan (Ray) Zhou",
//     score: 1}
// ]

// const squadFive  = [
//   { name: "Ari Collado",
//     score: 1},
//   { name: "Marcus Browne",
//     score: 1},
//   { name: "Venkata Raji Reddy Eda",
//     score: 1},
//   { name: "Shanel Elm",
//     score: 1},
//   { name: "Antonio Martinez",
//     score: 1},
//   { name: "Alexandra Perez",
//     score: 1}
// ]
// const squadSix = [
//   { name: "Gerardo Garcia Jr",
//     score: 1},
//   { name: "Kurt Julien",
//     score: 1},
//   { name: "Malaika Oglesby",
//     score: 1},
//   { name: "Steven Rouse",
//     score: 1},
//   { name: "Franklin Taylor",
//     score: 1}
// ]
// const squadSeven = [
//   { name: "Anthony Cannonier",
//     score: 1},
//   { name: "Michael Dantzler",
//     score: 1},
//   { name: "Erick Fierro",
//     score: 1},
//   { name: "Dante Rodriguez",
//     score: 1},
//   { name: "Ariel Thomas",
//     score: 1}
// ]

// const squadCoach = [
//   { name: "Davonte Williams",
//     score: 1},
//   { name: "Youssef Mohamed Farouk",
//     score: 1},
//   { name: "Raz Efron",
//     score: 1}
// ]

// console.log(squadOne, squadTwoFour, squadFive, squadSix, squadSeven, squadCoach)

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Pyramid />
      <Footer /> */}
      <StudentList students={students}/>
    </div>
  )
}

export default App

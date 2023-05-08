//Modules
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Pages
import StarshipList from '../pages/StarshipList/StarshipList'
import StarshipDetails from '../pages/StarshipDetails/StarshipDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starships/:id/' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App

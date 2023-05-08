import { useState, useEffect } from "react";
import { getStarshipList } from "../../services/sw-api";
import { Link } from "react-router-dom";
import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  if (!starshipList.length) return <h1>Loading Starships...</h1>

  return (
    <>
      <h1>Starships</h1>
      <main className="starship-list">
        {starshipList.map((starship) => 
          <button className="link-container" key={starship.name}>
            <Link to={`${starship.url.slice('21')}`} className="starship-link">{starship.name}</Link>
          </button>  
        )}
      </main>
    </>
  )
}

export default StarshipList
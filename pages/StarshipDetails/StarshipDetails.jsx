import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";
import './StarshipDetails.css'

const StarshipDetails = () => {
  const starshipId = useParams()
  const [starshipDetails, setStarshipDetails] = useState({})
  console.log(starshipId)

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipInfo = await getStarshipDetails(starshipId.id)
      setStarshipDetails(starshipInfo)
      console.log(starshipId.id)
    }
    fetchStarshipDetails()
  }, [starshipId])
  console.log(starshipDetails)

  if (!starshipDetails.name) return <h1>Loading Starship Details...</h1>

  return ( 
    <main className="starship-container">
      <h1>Starship Details</h1>
      <h2 className="starship-details">Name: {starshipDetails.name}</h2>
      <h2 className="starship-details">Model:{starshipDetails.model}</h2>
      <Link to={`/`} className="starship-details" id="return">Return</Link>
    </main>
    
  );
}

export default StarshipDetails;
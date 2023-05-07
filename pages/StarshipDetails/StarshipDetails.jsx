import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const starshipId = useParams()
  console.log(starshipId)

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipInfo = await getStarshipDetails()
      setStarshipDetails(starshipInfo)
    }
    fetchStarshipDetails()
  }, [starshipId])
  return ( 
    <main className="starship-details">
      <h1>Starship Details</h1>
      <h2>{starshipDetails.name}</h2>
      <h2>{starshipDetails.model}</h2>
    </main>
    
  );
}

export default StarshipDetails;
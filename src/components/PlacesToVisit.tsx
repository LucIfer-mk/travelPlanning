import { useState, useEffect } from 'react';

interface TravelPlace {
  id: string;
  name: string;
  country: string;
  reason: string;
  image: string;
  cost: string;
  discreption: {
    date: string;
  }[];
}

interface TravelData {
  ststus: string;
  message: string;
  travellist: TravelPlace[];
}

const PlacesToVisit = () => {
  const [travelPlaces, setTravelPlaces] = useState<TravelPlace[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTravelPlaces = async () => {
      try {
        const response = await fetch('/data/travel.json');
        if (!response.ok) {
          throw new Error('Failed to fetch travel places data');
        }
        const data: TravelData = await response.json();
        setTravelPlaces(data.travellist);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchTravelPlaces();
  }, []);

  if (loading) {
    return <div className="container">Loading places to visit...</div>;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">Places to Visit</h1>
      <div className="grid-container">
        {travelPlaces.map((place) => (
          <div key={place.id} className="card">
            <h2>{place.name}, {place.country}</h2>
            <img src={place.image} alt={place.name} />
            <p><strong>Reason:</strong> {place.reason}</p>
            <p className="cost"><strong>Cost:</strong> {place.cost}</p>
            {place.discreption[0].date && (
              <p><strong>Planned Date:</strong> {place.discreption[0].date}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit; 
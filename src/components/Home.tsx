import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>MyBucket-List</h1>
      </div>
      <div style={{ textAlign: 'center', margin: '50px 0' }}>
        <h2 style={{ marginBottom: '20px' }}>Welcome to My Travel Planning App</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Explore my bucket list and places I want to visit around the world.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link 
            to="/bucketlist" 
            style={{ 
              backgroundColor: '#4a90e2', 
              color: 'white', 
              padding: '12px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            View Bucket List
          </Link>
          <Link 
            to="/places" 
            style={{ 
              backgroundColor: '#4a90e2', 
              color: 'white', 
              padding: '12px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            View Places to Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 
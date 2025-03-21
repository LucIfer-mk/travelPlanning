import { useState, useEffect } from 'react';

interface BucketListItem {
  id: string;
  name: string;
  reason: string;
  image: string;
  cost: string;
}

interface BucketListData {
  status: string;
  message: string;
  bucketList: BucketListItem[];
}

const BucketList = () => {
  const [bucketListItems, setBucketListItems] = useState<BucketListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBucketList = async () => {
      try {
        const response = await fetch('/data/bucketList.json');
        if (!response.ok) {
          throw new Error('Failed to fetch bucket list data');
        }
        const data: BucketListData = await response.json();
        setBucketListItems(data.bucketList);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchBucketList();
  }, []);

  if (loading) {
    return <div className="container">Loading bucket list items...</div>;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">My Bucket List</h1>
      <div className="grid-container">
        {bucketListItems.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p><strong>Reason:</strong> {item.reason}</p>
            <p className="cost">{item.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BucketList; 
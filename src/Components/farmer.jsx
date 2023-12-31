
    import React, { useEffect, useState } from 'react';
    import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Farmer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8090/api/collections/posts_vegetables/records/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data || !data.items) return 'Loading...';

  return (
    <div style={{ margin: '100px' }}>
      {data.items.map((item) => {
        return (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
              marginBlock: 2,
              boxShadow: 20,
              marginInline: 2,
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={item.image_url}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
};

export default Farmer;
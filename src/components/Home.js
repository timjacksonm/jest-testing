import React, { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState('empty');
  return (
    <div>
      <p>{value}</p>
    </div>
  );
};

export default Home;

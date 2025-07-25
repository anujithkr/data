import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = "/Data.pdf"; 
  }, []);

  return null; 
}

export default App;

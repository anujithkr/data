import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = "/Data.pdf"; // PDF must be in /public folder
  }, []);

  return null; // Don’t show anything else
}

export default App;

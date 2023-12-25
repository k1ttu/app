import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

import LandingPage from "./Components/LandingPage";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 3000);
  }, []);

  return (
    <body className=" bg-gradient-to-br from-bgstart to-bgend">
      {
        load ?
        <LandingPage />
          :
          <Navbar />
      }
      
    </body>
  );
}

export default App;
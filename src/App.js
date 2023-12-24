import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import FooterA from "./Components/footer";
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
      <FooterA />
    </body>
  );
}

export default App;
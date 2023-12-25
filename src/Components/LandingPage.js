import 'animate.css'

import React from "react";
import loadingPic from './bg.png'
const LandingPage = () => {
  return (
  <main className='bg-gradient-to-br from-bgstart to-bgend animate__animated animate__fadeOut animate__delay-2s'>
    <img src={loadingPic} height={200} width={200} className=' top-1/2 left-1/2 -m-28 absolute' />
  </main>
  );
};



export default LandingPage;
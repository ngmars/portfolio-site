import React from 'react';

// Component imports
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import IntroSection from "./sections/intro"
//fontawesome imports start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// fontawesome imports end

library.add(fas, far, fab)
const App = () => {
  return ( 
  <main className='max-w-100vw min-h-100vh mx-auto'>
    <IntroSection />
  </main> 
  );
}
 
export default App;
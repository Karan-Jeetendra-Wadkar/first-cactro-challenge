import Mid from './components/Mid';

import './App.css'
import Navbar from './components/Navbar'
import Status from './components/Status';
import LastBox from './components/LastBox';

function App() {

  return (
    <>
     <div className="main">
    <Navbar />
    <Mid />
    <Status />
    <LastBox />

     </div>
    </>
  )
}

export default App

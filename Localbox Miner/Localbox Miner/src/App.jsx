
import { useContext } from 'react'
import Navbar from './Components/Navbar'

import { themecontext } from './Context/Themecontex'
import Mainsec from './Components/Mainsec'
import Button from './Components/Button'

function App() {
  const {theme}=useContext(themecontext)
  return (
    <>
      <div style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
        <Navbar />
        <Mainsec />
        {/* <AllRoutes /> */}
        <Button />
      </div>
      
    </>
  )
}

export default App

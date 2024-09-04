import AllRoutes from  './AllRoutes'
import Navbar from './Components/Navbar'

import { themecontext } from './Context/Themecontex'

function App() {
  const {theme}=useContext(themecontext)
  return (
    <>
      <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}}>
        <Navbar />
        <Mainsec />
      </div>
      <Button />
    </>
  )
}

export default App

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './assets/Navbar'
import './App.css'
import Content from './assets/Content'
import Footer from './assets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Navbar />
    <Content />
    <Footer />
        </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from '../compnents/Navbar';
import Card from '../compnents/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        

          <button onClick={() => {console.log("ciaooooo");
          }}>
          Pulsantino
        </button>
      </div>
      <hr />
      <div className='card-container'>
      <Card
        title = "Tucano"
        imgURL = "https://images.unsplash.com/photo-1604428401169-906567f16f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "tutto coloratoooo"
        isSpotted = {false}
        >
      </Card>

      <Card 
        title = "Flamingo"
        imgURL = "https://images.unsplash.com/photo-1488802484013-f23aca1e2d9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "è rosaaaaaaa"
        isSpotted = {true}
        >
      </Card>

      <Card 
        title = "Parrot"
        imgURL = "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description = "arggggggh"
        isSpotted = {false}
        >
      </Card>
      </div>
    </>
  )
}

export default App

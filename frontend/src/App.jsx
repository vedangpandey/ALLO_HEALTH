import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <div className='labels'>
            <div className='labelItem'>All</div>
            <div className='labelItem'>Pork</div>
            <div className='labelItem'>Seafood</div>
            <div className='labelItem'>Chicken</div>
            <div className='labelItem'>Beef</div>
            <div className='labelItem'>Vegetarian</div>
            <div className='labelItem'>Celebrations on Board</div>
          </div>
        <div className='items'>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default App

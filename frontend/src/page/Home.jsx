import React, { useState } from 'react'
import MenuItems from '../components/MenuItems'

const Home = () => {
  const [data,setData] = useState(null)
  return (
    <div className='flex w-screen h-screen bg-gray-300 overflow-x-hidden'>
         <MenuItems data={data} setData={setData} className="flex-shrink-0 max-w-[300px] overflow-y-auto" />
      </div>
  )
}

export default Home
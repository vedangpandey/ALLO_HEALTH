import React from 'react'
import MenuItem from './MenuItem'
import useData from '../hooks/useData'
import Filter from './Filter'

const MenuItems = ({data,setData}) => {
    const url='api/data'
    const meals = useData(url).meals
    const handleData = (labelName) => {
      setData(labelName)
    }
    const filtered = data ? meals.filter(meal => meal.labels.includes(data.toLowerCase())) : meals;
  return (
    <div className='flex flex-col ml-4'>
    <Filter onFilter={handleData}/>
    <div>
        {
            filtered ? filtered.map((meal) => {
                return <MenuItem key={meal.id} meal={meal}/>
            }) : "Loading..."
        }
    </div>
    </div>
  )
}

export default MenuItems
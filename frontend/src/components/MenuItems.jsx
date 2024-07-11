import React from 'react'

const MenuItems = ({data,setData}) => {
    const url='api/data'
    const meals = useFetch(url).meals
    const handleData = (labelName) => {
      setData(labelName)
    }
    const filtered = filterData ? meals.filter(meal => meal.labels.includes(data.toLowerCase())) : meals;
  return (
    <div></div>
  )
}

export default MenuItems
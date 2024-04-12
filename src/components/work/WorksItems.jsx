import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}></div>
  )
}

export default WorksItems
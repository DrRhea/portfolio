import React from 'react'
import { projectsData } from "./Data"
import { projectsNav } from "./Data"
import WorksItems from './WorksItems'

const Works = () => {
  return (
    <div className="work__filters">
      {projectsNav.map((item, index) => {
        return (
          <span className="work__item" key={index}>{item.name}</span>
        )
      })}
    </div>

    ,<work__container className="containet grid">
      {projectsData.map((item) => {
        return <WorksItems item={item} key={item.id}/>
      })}
    </work__container>
  )
}

export default Works
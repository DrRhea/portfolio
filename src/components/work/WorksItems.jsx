import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      {/* <a href={item.link} target={item.link !== "#portfolio" ? "_blank" : ""}> */}
        <img src={item.image} alt="" className="work__img"/>
      {/* </a> */}
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button" target={item.link !== "#portfolio" ? "_blank" : ""}>
        {item.link !== "#portfolio" ? item.button : ""}
        <i className={item.link !== "#portfolio" ? "bx bx-right-arrow-alt work__button-icon" : ""}></i>
      </a>
    </div>
  )
}

export default WorksItems

/* ToDo :
  1. tulisan demo buat dinamis, pilihan bisa demo atau see
  2. jika tidak ada linknya, jangan munculkan tulisan demo atau see
  3. buat class baru di icon untuk status aktif, jika ada link projectnya maka munculkan iconnya jika tidak hidden atau display none
  4. perbanyak ss atau buat project, minimal ada 1 project sesuai dengan bahasa pemrograman atau framework yang ada di skills
*/
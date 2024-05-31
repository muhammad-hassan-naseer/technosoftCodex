import React from 'react'
import GallaryItem from './GallaryItem'

const Gallary = () => {
  const tech = [
    {
      img: (
        <img
          className="w-100 rounded"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG4XTR1g_V25RP_nMBOD0lAwFsFv6E2S5kJNSLG8hSrXRUT3tx6RaLa5R_Cx5vWdnbzc&usqp=CAU"
        />
      ),
    },
    {
      img: (
        <img
          className="w-100 rounded"
          src="http://www.pepsicoindia.co.in/images/librariesprovider16/default-album/awards-recognition.jpg?sfvrsn=1"
        />
      ),
    },
    {
      img: (
        <img
          className="w-100 rounded"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuvWFNgB04WaqoNTbQHc7TVhM_3cpBuaQBw&usqp=CAU"
        />
      ),
    },
    {
      img: (
        <img
          className="w-100 rounded"
          src="https://machines.anca.com/Anca.CNC/media/Images/anca-2016.jpg"
        />
      ),
    },
    {
      img: (
        <img
          className="w-100 rounded"
          src="https://machines.anca.com/Anca.CNC/media/Images/phil-wysocki.jpg"
        />
      ),
    },
    {
      img: (
        <img
          className="w-100 rounded"
          src="https://awardsaustralia.com/content/Sean_Grealy_-_2019_SA_Young_Achiever_of_the_Year.jpg"
        />
      ),
    },
  ]
  var techArray = tech.map((section) => {
    return <GallaryItem image={section.img} />
  })
  return (
    <div className="bg-white">
      <div className="container page-top pt-5">
        <h3>Awards and Acheivements</h3>
        <div className="row">{techArray}</div>
      </div>
    </div>
  )
}

export default Gallary

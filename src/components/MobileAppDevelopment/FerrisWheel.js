import React from 'react'
import FerrisBox from '../UI/FerrisBox'

const FerrisWheel = () => {
  const advantages = [
    {
      head: 'Blockchain',
    },
    {
      head: 'Artificial Intelligence',
    },
    {
      head: 'Internet of Things',
    },
    {
      head: 'Cloud Computing',
    },
    {
      head: 'Big Data',
    },
    {
      head: 'Augmented Reality',
    },
  ]
  var boxArray = advantages.map((section) => {
    return <FerrisBox head={section.head} />
  })
  return (
    <div>
      <div className="container">
        <div className="row">{boxArray}</div>
      </div>
    </div>
  )
}

export default FerrisWheel

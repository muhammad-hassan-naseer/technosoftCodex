import React from 'react'
import FerrisBox from './FerrisBox'

const FerrisWheel = () => {
  const advantages = [
    {
      head: 'Creative direction',
    },
    {
      head: 'Usability',
    },
    {
      head: 'Strong layout and graphic redesign',
    },
    {
      head: 'Information architecture',
    },
    {
      head: 'Flash and HTML5 animation',
    },
    {
      head: 'Database integration',
    },
    {
      head: 'Content analysis and generation',
    },
    {
      head: 'Online branding',
    },
    {
      head: 'Advertising solutions',
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

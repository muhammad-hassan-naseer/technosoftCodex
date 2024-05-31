import React from 'react'

const Importance = (props) => {
  var stepArray = props.importanceData.list.map((section) => {
    return <li>{section.key}</li>
  })
  return (
    <div>
      <h3 className="mt-5">{props.importanceData.head}</h3>
      <ol>{stepArray}</ol>
    </div>
  )
}

export default Importance

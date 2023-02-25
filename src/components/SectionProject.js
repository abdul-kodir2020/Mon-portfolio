import React from 'react'

function SectionProject(props) {
    console.log(props.image)
  return (

    <div style={{backgroundImage:`url(${props.image})`}}>
      <div className='section1'>
        <div className='col-md-6 col-sm-12'>
          <h1>{props.content}</h1>
        </div>
      </div>
    </div>
  )
}

export default SectionProject

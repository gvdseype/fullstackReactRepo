import React from 'react'
import Header from './header.js'
import Content from './content.js'
import Total from './total.js'


const Course = ({course}) => {
  return (
    <div>
      <Header key={course.id} name={course.name}/>
      <Content key={course.id} parts={course.parts}/>
      <Total key={course.id} parts={course.parts} />
    </div>
    
  )
}

export default Course
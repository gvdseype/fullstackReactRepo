import React from 'react'
import Header from './header.js'
import Content from './content.js'


const Course = ({course}) => {
  return (
    <div>
      test2
      <Header key={course.id} name={course.name}/>
      <Content key={course.id} parts={course.parts}/>
    </div>
    
  )
}

export default Course
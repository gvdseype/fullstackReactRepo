const Header = (title) => {
  <h1>{title}</h1>
}

const Part = (part, exercise) => {
  return () => {
    <p>
      {part} {exercise}
    </p>
  }
  
}

const Content = (course) => {
  course.course.parts.forEach(element => {
    return <Part part={element.name} exercise={element.exercises}/>
  })
}

const Total = (first, second, third) => {
  <p>Number of exercises {first + second + third}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content course={course}/>
      <Total first={course.parts[0].exercises} second={course.parts[1].exercises} third={course.parts[2].exercises} />
    </div>
  )
}

export default App
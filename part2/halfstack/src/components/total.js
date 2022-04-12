
const ComputeTotal = ({parts}) => {
  let initialValue = 0;
  let total = parts.reduce((previousValue, element) => previousValue + element.exercises, initialValue);

  return (
    <strong>total of {total} exercises</strong>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <ComputeTotal parts={parts}/>
    </div>
  )
}

export default Total
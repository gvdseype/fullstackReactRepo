# Notes

[TOC]

### Component

When using React, all content that needs to be rendered is usually defined as React components. Some code defining a component:

```react
const App = () => (
	<div>
  	<p>Hello world</p>
  </div>
)
```

Technically, the component is defined as a JavaScript function. The following is a function which doesn't receive any parameters:

```react
() => (
  <div>
    <p>Hello world</p>
  </div>
)
```

In the first code snippet we assigned it to the variable `App`. Here, the function returns the value of the expression. If we want to add some logic to it we should also use a `return` statement to make clear what the function evaluates to. Like this:

```javascript
const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```

It is possible to render dynamic content inside of a component, like this:

```react
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
```

Any Js code within the curly braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component. 

React component names must be capilitalized. 

```react
const footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <footer />
    </div>
  )
}
```

The page is not going to display the content within the Footer component, instead it only creates an empty footer element.

### JSX

The layout of React components is mostly written using JSX. Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by components is compiled into JavaScript. 



### Mulitple Components

We can add an additional component and use it inside a separate component:

```react
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}
```

Like this we can reuse specialized components.

Another strong convention is the idea of a root component called `App` at the top of the component tree of the application. 

Lastly, the content of a React component (usually) needs to contain one root element. If we try to define the component App without the outermost div-element:

```react
const App = () => {
  return (
    <h1>Greetings</h1>
    <Hello name="Maya" age={26 + 10} />
    <Footer />
  )
}
```



### Props

It is possible to pass data to components using `props`. It is a parameter which can represent an object as argument, which has fields corresponding to all the "props" the user of the component defines:

If the value of the prop is achieved using JavaScript it must be wrapped with curly braces. 

```react
const App = () => {
  const now = new Date();
  const name = "Peter";
  const age = "23"

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={23}/>
      <Hello name={name} age={age}/>
    </div>
  )
}
```



### Arrays

One characteristic of functional programming paradigm is the use of immutable data structures. In React code, it is preferable to use the method `concat`, which does not add the item to the array, but creates a new array which the content of the old array and the new item are both included.

```react
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```



### Stateful component

You import the `useState` function like this:

```react
import { useState } from 'react'
```

The function body that defines the component begins with the function call:

```react
const [counter, setCounter] = useState(0)
```

The function call adds state to the component and renders it initialized with the value of zero. The functionr eturns an array that contains two items. We assign the items to the variables `counter` and `setCounter` by using the restructuring syntax.

* The `counter` variable is **assigned** the **initial value** of state which is zero. 
* The variable `setCounter` is assigned to a function that will be used to **modify** the **state**.

The application calls the setTimeout function and passes it two parameters: a function to increment the counter state and a timeout of one second:

```react
setTimeout(
  () => setCounter(counter + 1),
  1000
)
```

* The <u>state modifying function</u> `stateCounter` is called -> React re-renders the component -> which means that the function body of the component function get re-executed.

Every time the `setCounter modifies the state it causes the component to re-render. The value of the state will be incremented again after one second, and this will continue to repeat for as long as the application is running. 



### Event handling

Registring ane vent handler function to the click event happens like this:

```react
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}
```

We set the value of the button's `onClick` **attribute** to be a reference to the `handleClick` function defined in the code. Now every click of the plus button causes the `handleClick` function to be called, meaning that every click event will log a clicked messsage to the browser console. 

The event handler function can also be defined directly in the value assignment of the `onClick-attribute`:

```react
const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}
```

### Complex state

We use `useState` function multiple times to create seperate 'pieces' of state.

We create two pieces of state for the application named `left` and `right` that both get the initial value of 0:

```react
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
```

The component gets access to the functions `setLeft` and `setRight` that it can use to update the two pieces of state.

We could implement the same functionality by saving the click count of both the left and right buttons into a single object:

```
{
  left: 0,
  right: 0
}
```

When a button is clicked, either the handleLeftClick or handleRightClick functions are called. The following object is set as the new state of the application:

```react
{
  left: clicks.left + 1,
  right: clicks.right + 1
}
```

We can define the new state object by using the object spread syntax:

```react
const handleLeftClick = () => {
  const newClicks = { 
    ...clicks, 
    left: clicks.left + 1 
  }
  setClicks(newClicks)
}

const handleRightClick = () => {
  const newClicks = { 
    ...clicks, 
    right: clicks.right + 1 
  }
  setClicks(newClicks)
}
```

`{...clicks}` creates a new object that has copies of all of the properties of the `clicks` object. When we speficy a particular property in `{...clicks, right: 1}`, the value of the `right` property in the new object will be 1.

...

```react
{...clicks, right: clicks.right + 1}
```

... creates a copy of the `clicks` object wher the value of the `right` property is increased by one. 

Assigning the object to a variable in the event handlers is not necessary and we can simplify the functions to the following form:

```js
const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })
```

------

### Mutating state directly

It is forbidden in React to mutate the state directly, it can result in unexpected side effects. Changing state has always be done by setting the state to a new object. If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object, and setting that as the new state. 

For this reason we don't do this:

```react
const handleLeftClick = () => {
  clicks.left++
  setClicks(clicks)
}
```

Although it works just as fine. 

------

### Handling arrays

We can use an array `allClicks` to remember every click that has occurred in the application.

```react
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
```

`useState` for `allClicks` is set to an empty array. When a button is clicked, an item is added to the array by using the `concat` method, which does not mutate the existing but rater returns a new copy of the array with the item added to it. We could use the `push` method to achieve the same, but this would mutate the array which is something we want to avoid. 

Lastly, we call the `join` method on the `allClicks` array that joins all the items into a single string. 

### Conditional rendering

```react
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
```

The *History* compontent renders completey different React elements depending on the state of the application. This is called conditional rendering. 

### Rule of Hook

![Dustin Hoffman as Captain Hook | Peter and the starcatcher, Captain hook,  James hook](https://i.pinimg.com/originals/a2/6e/82/a26e8207bc2515d085cae6aa4a4b4a8e.jpg)

Hooks shouldn't be called from inside of a loop, a conditional expression, or any place that is not a function defining a component. This must be done to ensure that the hooks are alwyas called in the same order, and if this isn't the case the application could behave erratically. Hooks may only be called from the inside of a function body that defines a React component:

```react
const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```

### Rule of Component

Do not define components within components.

```react
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  // Do not define components inside another component
  const Display = props => <div>{props.value}</div>

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
```

The application could still work, but there is no benefit in doing it and may lead to many unpleasant problems. The biggest issue stems from React treating a component defined inside of another component as a new component in every render. This makes it impossible for React to optimize the component.






















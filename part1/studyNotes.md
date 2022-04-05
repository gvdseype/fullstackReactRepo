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




### A note on React version

Version 18 of React was released late March 2022. The code in material should work as it is with the new React version. However, some libraries might not yet be compatible with React 18. At the moment of writing (4th April) at least the Apollo client used in [part 8](https://fullstackopen.com/en/part8) does not yet work with most recent React.

In case you end up in a situation where your application breaks because of library compatibly problems, *downgrade* to the older React by changing the file *pacgage.json* as follows:

```
{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  // ...
}
```

After the change is made, reinstall dependencies by running

```
npm install

```


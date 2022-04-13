### A note on React version

Version 18 of React was released late March 2022. The code in material should work as it is with the new React version. However, some libraries might not yet be compatible with React 18. At the moment of writing (4th April) at least the Apollo client used in [part 8](https://fullstackopen.com/en/part8) does not yet work with most recent React.

In case you end up in a situation where your application breaks because of library compatibly problems, *downgrade* to the older React by changing the file *package.json* as follows:

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



### Setting up a React app

The easiest way to get started by far is by using a tool called [create-react-app](https://github.com/facebook/create-react-app). It is possible (but not necessary) to install *create-react-app* on your machine if the *npm* tool that was installed along with Node has a version number of at least *5.3*.

Let's create an application called *part1* and navigate to its directory.

```
npx create-react-app part1
cd part1
```

The application is run as follows

```
npm start
```

**WARNING** create-react-app will automatically turn your project into a git-repository unless you create your application inside of an existing git repository. **Most likely you do not want each of your projects to be a separate repository**, so simply run the *`rm -rf .git`* command at the root of your application.

In some situations you may also have to run the command below from the root of the project:

```
rm -rf node_modules/ && npm i
```



### Setting up axios server

The axios library works like fetch and can be installed via node packet manager, like this:

```
npm install axios
```

**`npm`** commands should always be run in the project root directory, which is where the package.json file can be found. This command will install Axios as one of the dependencies found in package.json. In addition, the command also downloaded the library code, which can be found in `node_modules` directory in the root. 

We can install `json-server` as a development dependency by executing the command:

```
npm install json-server --save-dev
```

and making a small addition to the scripts part of the package.json file:

```
{
  // ... 
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -p3001 --watch db.json"
  },
}
```

After this, we can now start the json-server from the project root directory with the command:

```
npm run server
```

#### The difference between axios and json-server

```js
npm install axios
npm install json-server --save-dev
```

* Axios is installed as a runtime dependency of the application, because the execution of the program requires the existence of the library.
* Json-server was installed as a development dependency, since the program itself doesn't require it. It is used during software development. 

#### Axios and promises

To run json-server and your react simultaneously, you may need to use two terminal windows. One to keep json-server running and the other to run react-app. 

The library can be brought into use by the `import` statement:

```
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)
```

![fullstack content](https://fullstackopen.com/static/823a2e7f414c99cb849a42470e4f372d/5a190/16b.png)

When the content of the file `index.js` changes, React does not always notice that automatically. We need to refresh the browser to see the changes. To make React notice the changes automatically, we can create a file named `.env` in the root directory of the project and add the line 

```
FAST_REFRESH=false
```

After which we need to restart the app for the applied changes to take effect.

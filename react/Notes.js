// React --> react is open source java script library used to build user interface specially for single page application. it allows developers to build complex UI by breaking them down into small pices of code called components.

// JSX --> javascript xml . it allows you to write js inside html

// Virtual Dom --> it is copy of actual DOM (memory representation of actual DOM). whenever any components state or props changes react create a new virtual DOM tree. then it compares it to the previous tree. and then apply minimum set of changes require to Real DOM 

// States --> States are used to store the data that can be change over a period of time

// Hooks --> hooks are functions . with the help of hooks you can define State in your react application (in functional component). example useState Hook, useEffect Hook, useReducer Hook, etc;

// UseState Hook --> used to store value and can be used to re-render of component . it takes a array of two arguments ,a variable and a function. variable is used to store the value and function is used to update the value of variable. whenever update function will run react re-renders the whole component 

// useEffect Hook --> is used to run side effect such as updating the DOM element ,fetching api etc. it takes a two arguments, a callback function and a array of dependency. if the array of dependency is blank , code inside useEffect will run only one time. useEffect always runs after the first render of component

// UseRef Hook --> with the help of useRef hook you can copy the address of any react element(tag). without re-rendering of component. it directly manipulate the DOM.

// props --> with the help of props you can pass the data from parent component to child component. props are read only .you can not change the vaalue of props.


// contextApi --> with the help of context api you can create global state in  your react application. data will be available for all component(parent or child). with the help of context api you can avoid props drilling.

// Steps for creating context -->

//1) create a folder context and inside folder create a contextFile (Example: UserContext.jsx) and use createContext to open a global context or create a global store

// 2) create a state file to manage the data inside context store
    //a) create component rafce
    //b) import context file here  (import UserContext from './UserContext';)
    //c) make a provider of this context file and pass value attribute 
            // example  <UserContext.Provider value={{x, y}}>
            //                  {props.children}
            // </UserContext.Provider>

//3) wrap your app with UserState file inside main.jsx 
        // example -->     <UserState>
        //                      <App/>
                        // </UserState>


// 4) now you can see this statefile data on any page (app, home about) using a hook useContext(yourContextName)
    // example in Home page --> let ctx = useContext(UserContext)
                                // console.log(ctx)  // {x, y}  show the same data that are passed through state file

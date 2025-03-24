# Handling Forms and Input State with useState

## Controlled Component
[React controls elements by State(useState)]
* Controlled component in React where form data is handled by the React Component State

* The input value is bould to a state variable and updates via an onChange event handler.

* The component actively controls the form fileds and data is managed entirely by React

* Advantages :
    * Easier to validate and manipulate form data.  
    * Provides real-time updates.  
    * Good for more complex form logic.

```js
    const [username, setUsername] = useState('');

    ....

    <input type="text" value={username} 
    onChange = {(e) => setUsername(e.target.value) }/>
```

## Uncontrolled Component
[DOM controls elements] 
* An Uncontrolled component uses the DOM itself to manage form data, not the React state.  
* The input's value is accessed only when needed, often through refs or event.target.value in a form submit handler.  
* React doesnot manage or track the form data until the form is submitted.

* Advantages
    * Simple for quick forms that dont need real time updates.   
    * Better for legacyforms or when  migrating older HTML

```js
    <input type="text" value="username" />
```


# Advanced React Hooks

*  `useRef` manages references to DOM elements and persistent values without causing re-renders.

* `useReducer` handles complex state logic efficiently, especially when managing multiple  related state values.


* useReducer - React Hook which is used to manage complex state

* How ?
    const [a, SetA] = useState(); // one action

    const [b,dispatch] = useReducer(reducer_fn, state)
        // it can be more than one action => 

* useReducer gives you a state value and a function(dispatch) to trigger specific updates through a reducer function that decides how to change the state.


# Custom Hook 
* Its just a function that allows us to encapsulate logic we want to `reuse`.  
* Hook starts with `use`.  
* Reusability, Separation of Concerns, Cleaner Code.  


## Steps
1. Creating the Custom Hook `useFormFields`

2. Using the hook in the Component



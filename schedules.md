## Week 1
### Part 1
**Introduction to Web Technology**
* Overview of Web Technology
* Role of HTML in Web Development

**HTML Tags, Elements, Attributes**

* Understanding HTML Tags
* Common HTML Elements
* Headings
* Paragraphs
* Lists
* etc.
* HTML Attributes and their Usage
  
**HTML Images and Tables**
* Embedding Images in HTML
* Image Tags
* Alt Text
* Image Sources
* Creating Tables in HTML
* Table Structure
* Table Rows and Columns
* Table Attributes
* 
### Part 2
**HTML Links, Lists, Forms**
* Creating Hyperlinks in HTML
* Anchor Tags
* Linking to External Resources
* Internal Page Links
* Working with Lists
* Ordered Lists
* Unordered Lists
* Nested Lists
* HTML Forms
* Form Elements
* Input Types
* Form Attributes

## Week 2
### Part 1
**CSS Styling Approaches**

* Inline
* Internal
* External

**Selectors and Styling**

* Basic Selectors
* Element Selector
* Class Selector
* ID Selector

### Part 2
**Typography, Colors, and Background Properties**

* Font Properties
* Text Properties
* Color Properties
* Background Properties


**Box Model and Positioning**

* Understanding the Box Model
* Content
* Padding
* Border
* Margin
* Box Sizing Property
* Position Property
* Static Positioning
* Relative Positioning
* Absolute Positioning
* z-index Property


## Week 3
### Part 1

**JavaScript Basics:**

* Overview of JavaScript
* Role of JavaScript in Web Development
* Basics of JavaScript Syntax
* Setting up JavaScript in a Web Page

**Control Statements:**

* Conditional Statements (if, else, switch)
* Looping Statements (for, while)
* Control Flow in JavaScript

### Part 2

**Primary Data Types and Objects in JavaScript:**

* Numbers, Strings, Booleans
* Undefined and Null
* Type Coercion and Conversion

* Introduction to Objects
* Date Object
* Math Object
* Working with Arrays
* Array Methods
* Iterating through Arrays

**Functions and Events:**

* Declaring and Invoking Functions
* Function Parameters and Return Values
* Introduction to Events in JavaScript

## Week 4
### Part 1
**DOM Events and Event Listeners:**

* Understanding the DOM (Document Object Model)
* Handling DOM Events
* Implementing Event Listeners

**Validation and Error Handling:**

* Form Validation in JavaScript
* Error Handling with Try-Catch
* Handling Exceptions

### Part 2
**Functional Programming in JS:**

* Introduction to Functional Programming
* Functions as First-Class Citizens
* Higher-Order Functions and Callbacks
* Map, Filter, and Reduce Functions

**Asynchronous Programming in JS:**

* Asynchronous JavaScript
* Callbacks and Promises
* Async/Await for Asynchronous Operations


## Week 5
### Part 1
**Node and NPM Installation**

* Installing Node.js and NPM  
* Running Node.js Scripts  
* Node.js Standard Libraries  

**Node.js Standard Libraries**
* File System (fs) Module  
* Events Module  
* Streams Module  

* HTTP Module  
* Creating a Simple HTTP Server with simple Service  

### Part 2
**Express.js**
* Introduction to Express.js  
* Understanding Middleware in Express  

**Understanding REST Services**
* Introduction to REST Services  
* Understanding Services, Controllers, Routers  
* Writing Simple CRUD REST Services  


# Week 6 - React.js
## **Day 1: Introduction and Core Concepts**
### Introduction to React and JSX
- What is React?
- React as a library for building user interfaces (UI)
- Overview of **Single Page Applications (SPA)** vs. Multi-Page Applications
- Introduction to JSX: Combining JavaScript and HTML-like syntax
- Hands-on: Write basic JSX code and explore how it compiles to JavaScript

### Functional Components and Props
- Introduction to **Functional Components**
- Understanding component structure and rendering
- Passing data between components using **props**
- Hands-on: Create simple components that accept props to display dynamic data

### State Management with Hooks
- Introduction to state in functional components with `useState`
- Handling state changes and rendering updates
- Event handling (onClick, onChange)
- Hands-on: Build a simple interactive app (like a counter or input field) to manage state and handle user interactions

## **Day 2: Component Lifecycle and Forms in Functional Components**

### `useEffect` Hook for Side Effects
- Introduction to **side effects** in React (e.g., data fetching, subscriptions)
- Using the `useEffect` hook to manage lifecycle behavior in functional components
  - Running code after render
  - Specifying dependencies for `useEffect`
  - Cleaning up side effects
- Hands-on: Fetch data from an API and display it in a component

### Conditional Rendering and Lists
- **Conditional Rendering**: Showing or hiding components based on state (using `if`, `&&`, and ternary operators)
- Rendering **Lists** using `.map()` and understanding the importance of **keys** in lists
- Hands-on: Display a list of items from API data, with conditional rendering (e.g., show a loading spinner until data loads)

###  Handling Forms and Input State with `useState`
- Controlled vs. uncontrolled components in React forms
- Managing form input state using the `useState` hook
- Handling form submission and validation
- Hands-on: Build a form with multiple input fields, validate input, and manage form state (e.g., login or contact form)


# Week 7 - React.js
## **Day 3: Advanced Hooks, Context API, and Performance Optimization**
### Advanced React Hooks
- Introduction to the `useRef` hook:
  - Managing references to DOM elements
  - Persistent values across renders (without causing re-renders)
- Introduction to `useReducer`:
  - Using `useReducer` for more complex state logic (like Redux-style state management)
  - Comparing `useState` vs. `useReducer`
- Hands-on: Build a form using `useReducer` to manage multiple field states more efficiently

### Global State Management with Context API
- Introduction to **Context API**:
  - Solving the “prop drilling” problem by sharing state across multiple components
  - Creating and providing context
  - Consuming context using `useContext` hook in functional components
- Hands-on: Build a simple app with multiple components that share state globally using the Context API (e.g., a theme switcher or user authentication system)

### Performance Optimization in React
- Introduction to React performance issues:
  - Unnecessary re-renders and how they impact performance
- Using **`React.memo`** to prevent re-renders of child components
- Introduction to **`useMemo`**:
  - Memoizing expensive calculations to avoid recalculating on every render
- Introduction to **`useCallback`**:
  - Memoizing functions to avoid unnecessary re-creations of handlers
- Hands-on: Optimize a list filtering app using `React.memo`, `useMemo`, and `useCallback`

## **Day 4: Navigation with Reach Router and API Integration**

### Introduction to Reach Router
- What is **Reach Router** and how is it different from React Router?
- Setting up Reach Router in your React app
- Creating basic routes with `<Router>` and route components
- Navigating between pages with `<Link>` and the `navigate` function
- Hands-on: Create a simple multi-page app using Reach Router (e.g., Home, About, and Contact)

### Dynamic Routing and Nested Routes
- **Dynamic Routing**: Passing URL parameters and using them in route components
- Creating **Nested Routes** for better route organization
- Handling redirects and navigation programmatically with `navigate`
- Hands-on: Add dynamic routes to the app (e.g., a user profile page with dynamic IDs)

### API Integration and Data Fetching
- Making API requests using `fetch` or `axios`
- Handling loading, success, and error states
- Integrating API data with Reach Router’s routes
- Hands-on: Fetch data from an external API (e.g., a list of posts or users) and display the results in a routed page

## Week 8 - React.js

## **Day 5: State Management with Redux and Testing in React**

### Introduction to Redux
- Why use Redux for state management?
- Core concepts of Redux:
  - Store
  - Actions
  - Reducers
  - Dispatching actions and updating the state
- Setting up **Redux** with React
  - Installing `redux` and `react-redux`
  - Configuring the Redux store
  - Connecting Redux to React components using `useSelector` and `useDispatch`
- Hands-on: Set up Redux in an existing app and manage global state (e.g., managing user authentication state)

### Redux Middleware and Async Actions
- Introduction to **middleware** in Redux (e.g., `redux-thunk`)
- Handling async operations in Redux (e.g., fetching API data)
- Managing side effects (e.g., API requests) in Redux
- Hands-on: Fetch API data with Redux Thunk and dispatch actions based on API response

### Testing in React
- Introduction to testing React applications:
  - Why testing is important
  - Overview of testing tools: **Jest** and **React Testing Library**
- Writing unit tests for React components:
  - Testing component rendering and user interactions
  - Mocking props and functions
- Hands-on: Write unit tests for a simple React component (e.g., form submission or button click)
- Overview of snapshot testing with Jest


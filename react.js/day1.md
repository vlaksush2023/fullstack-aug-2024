# Introduction and Core Concepts

* React is a Javascript Library used to build fast and interactive user interfaces (UI) for web application.
* JSX is a syntax extension that allows you to write HTML-like code in javscript, which is then compiled into standard Javascript.(Babel)
.jsx  => .js 

* Component based application 
* MVC (Model View Controller)
    Model => data
    View => look and feel
    Controller => Logical code
* Libraries => react, react-dom, and react-scripts
    react => standard lib
    react-dom => virtual dom
    react-scripts => start, build, test 

    react app =>page ( comp1(b1) comp2(b2,3) comp3(b4,5,6) .... )

* Single Page Application

* How to Components
    
    class based component (Before React v16 ,as well as now also)

        class ...
        state


    functional based component (From React 16) - 
        To manage states.(data)

        function  ...
        Hooks ...



# Functional Components and Props
* Functional components in React are Javascript functions that return JSX and are used to build UI components.

* `Props`, allows you to pass data from one component into another component, enabling dynamic content in your application.

* Using props we can pass data only from parent into child.
* props is readonly


# State Management with Hooks
* The `useState` hook allows functional components to manage and update state in React.  

* By using event handlers like onClick / onChange ... , you can capture user interactions and trigger state updates.



// function Greeting(props){  // props is an object
//     return(
//         <div>
//             Welcome to {props.name}

//             <h1>{props.name} Page </h1>
//         </div>
//     )
// }
// export default Greeting;


// function Greeting({name}){  // js - destructuring
//     return(
//         <div>
//             Welcome to {name}

//             <h1>{name} Page </h1>
//         </div>
//     )
// }
// export default Greeting;

const Greeting = ({name}) => { 
    return(
        <div>
            Welcome to {name}
        </div>
    )
}
export default Greeting;
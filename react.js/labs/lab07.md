## Lab - Context API
### Objective
Build a global user authentication system using the Context API, where the app shares authentication state across multiple components (e.g., login status).

### Steps:
* Create a UserContext to manage global user authentication state (isLoggedIn, userName).  

* Provide the context to all components using UserProvider.  

* Create two components:
    * A login form that updates the user authentication state.  
    * A dashboard component that displays the current login status.  
    * Use the useContext hook to access and update the authentication state in both components.  

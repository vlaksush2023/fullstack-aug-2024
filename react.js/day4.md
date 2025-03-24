# Global State Management with Context API

## useState
A hook that lets you add state to  a functional component, perfect for managing  local state.

## useReducer
A hook useful for handling more complex state logic, where actions determine how state updates.

## useContext
A hook which is used to manage stage to the entire application without props drilling.

## Props drilling
Passing data from parent to child components , often leadning to deeply nested rops, makes code harder to manage.



# Performance Optimization in React
* Unnecessary re-renders can slow down React Applications, affecting  performance.  
* React.memo   (component)
    It prevents child components from re-rendering unless their props have changed, which is useful when components receive props that rarely change.

* useMemo  (statement/ result)
    * It memoizes expensive calculations, so React does not recompute them unnecessarily on every render.

* useCallback (function)
    * It memoizes functions , preventing them from being recreated every time the component re-renders.
    



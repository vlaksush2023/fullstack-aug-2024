import React,{memo} from 'react'

 function ChildComponent() {
    
    console.log("child rendered!")

  return (
    <div>
      <h3>Child Component</h3>
    </div>
  )
}

export default memo(ChildComponent);

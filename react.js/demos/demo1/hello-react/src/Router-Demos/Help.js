import { useNavigate } from "react-router-dom"

const Help = () => {
    const navigate =  useNavigate()
    const goHome = () => {
      navigate("/")
    }
    return (
      <div>
        <h3>Help Page</h3> 
        <button onClick={goHome}>Goto Home</button>
      </div>
    )
  }

  export default Help
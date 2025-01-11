import "./notfound.css"
import{Link} from "react-router-dom"

const Notfound = () => {
  return (
    <div className="Not-Found-Page container">
      <h2>Page Not Found</h2>
      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  )
}

export default Notfound

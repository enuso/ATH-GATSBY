import React from 'react'
import{Link} from 'gatsby'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><h1><Link to="/">Home</Link></h1></li>
            <li><h1><Link to="/about/">About</Link></h1></li>
            <li><h1><Link to="/contact/">Contact</Link></h1></li>
        </ul>
    </div>
  )
}

export default Navbar
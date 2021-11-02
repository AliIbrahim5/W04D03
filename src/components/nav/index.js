
import { Route,Link} from "react-router-dom"
import React from 'react'
import "./stayle.css"

const Nav = () => {
    return (
        <div>
            <ul className="list-ul">
              <li className="list-li">
              <Link to="/" className="link-stayle">Home</Link>
              </li>
              <li>
              <Link to="/Abuot" className="link-stayle">About</Link>
            </li>   
            <li>
              <Link to="/cards" className="link-stayle">cards</Link>
            </li>
            <li>
              <Link to="/contact" className="link-stayle">contact</Link>
            </li>
            </ul>
            
        </div>
    )
}

export default Nav

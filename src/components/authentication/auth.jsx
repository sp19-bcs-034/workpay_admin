import React from 'react'
import { Link } from "react-router-dom";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="div" >
    <div className="divvv" >
          <div className="item">
             <Link to="/" style={{ textDecoration: "none" }}>
            <span className='asad'>Verify id</span>
            </Link>
          </div>
          <div className="item">
             <Link to="/" style={{ textDecoration: "none" }}>
            <span className='asadd'>Verify pic</span>
            </Link>
          </div>
          </div>
          </div>
  )
}

export default Auth
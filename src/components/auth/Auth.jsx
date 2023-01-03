import React from 'react'
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { useSearchParams } from "react-router-dom";
import TestImg from '../../components/images/2.jpg'
import TestImgg from '../../components/images/3.jpg'
import "./auth.scss";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyValue = searchParams.get("show")
  return (
    <div className="divv" >
    <div className="divvvv" >
    <div className="item">
             {/* <Link to="/" style={{ textDecoration: "none" }}>
            <span className='asad'>HOME</span>
            </Link> */}
          </div>
          <div className="item">
             <Link to="/auth?show=azad" style={{ textDecoration: "none" }}>
            <span className='asadd'>VERIFY ID</span>
            </Link>
          </div>
   
          {/* <div className="item">
             <Link to="/" style={{ textDecoration: "none" }}>
            <span className='asadd'>VERIFY PIC</span>
            </Link>
            
          </div> */}
          </div>
          { keyValue==='azad' &&(
          <Link className="productCard11" to={`/product/${1}`}>
          <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="nothing"style={{width: "18rem"}} />
          <div className="product-person">
            <Avatar src='./Profile.png' />
            <p>Strassencobra</p>
          </div>
          <p >I will develop complete software or web applications</p>
          <div>
            <span className="productCardSpan">
              <StarIcon style={{ color: 'orange' }} />
              <span>4.9</span> (123)
    
            </span>
          </div>
          <div className="line"></div>
    
          <div className='price-container'>
            
            <FavoriteIcon style={{color:'grey'}}/>
            <span className="price">{`$${500}`}</span>
          </div>
       </Link>
       
)}
{ keyValue==='true' &&(
          <Link className="productCard22" to={`/product/${1}`}>
          <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="nothing"style={{width: "18rem"}} />
          <div className="product-person">
            <Avatar src='./Profile.png' />
            <p>Strassencobra</p>
          </div>
          <p >I will develop complete software or web applications</p>
          <div>
            <span className="productCardSpan">
              <StarIcon style={{ color: 'orange' }} />
              <span>4.9</span> (123)
    
            </span>
          </div>
          <div className="line"></div>
    
          <div className='price-container'>
            
            <FavoriteIcon style={{color:'grey'}}/>
            <span className="price">{`$${500}`}</span>
          </div>
       </Link>
)}
          </div>
  )
}

export default Auth
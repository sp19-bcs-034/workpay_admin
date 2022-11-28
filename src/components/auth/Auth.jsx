import React from 'react'
import { Link } from "react-router-dom";
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
             <Link to="/auth?show=true" style={{ textDecoration: "none" }}>
            <span className='asadd'>VERIFY ID</span>
            </Link>
          </div>
   
          {/* <div className="item">
             <Link to="/" style={{ textDecoration: "none" }}>
            <span className='asadd'>VERIFY PIC</span>
            </Link>
            
          </div> */}
          </div>
          { keyValue==='true' &&(
          <div className='cnic' style={{backgroundColor:"#fffddd",minHeight:'180px'}}>
<div className='imgDiv' style={{ backgroundImage: `url("${TestImg}")`,
 width:'100px',height:"100px"}}>
  <img className='img' src={TestImg} alt="" srcset="" />
</div>
            </div>)
}
{ keyValue==='true' &&(
          <div className='cnic' style={{backgroundColor:"#fffddd",minHeight:'180px'}}>
<div className='imgDiv' style={{ backgroundImage: `url("${TestImg}")`,
 width:'100px',height:"100px"}}>
  <img className='img' src={TestImgg} alt="" srcset="" />
</div>
            </div>)
}
          </div>
  )
}

export default Auth
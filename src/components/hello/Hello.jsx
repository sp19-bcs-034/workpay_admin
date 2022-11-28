import React from 'react'
import { Link,useSearchParams } from "react-router-dom";
import {MyVerticallyCenteredModal} from '../Model'
import "./hello.scss";
const Hello = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyValue = searchParams.get("type")
console.log(keyValue)
  return (
 

 <div className="div" id='main' >
 
  <div className="divvv" >
  {/* <div className="item">
             <Link to="/" style={{ textDecoration: "none" }}>
            <span className='asad'>HOME</span>
            </Link>
          </div> */}
          <div className="item">
             <a href='/hello?type=approve1' style={{ textDecoration: "none" }}>
            <span className='asad'>GIG PUBLISH APPROVAL</span>
            </a>
          </div>
          <div className="item">
             <a href="/hello?type=approve2" style={{ textDecoration: "none" }}>
            <span className='asadd'>BLOCK GIGS</span>
            </a>
          </div>
          </div>

<div className='mc-flex'>
{(keyValue==="approve1" || keyValue==null) && (
  
<div className="card" style={{width: "18rem"}} >
  <div className="card-body1">
    <h5 className="card-title">GIG PUBLISH APPROVAL 1</h5>
    <h6 className="card-subtitle">GIG DETAILS</h6>
    <p className="card-text">Here is the gig of your content you can check your gig details here we can approve or dissapprove your gig accroding to your past experience.so you can't chalnge adminis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
    
    
    <div className='d-flex flex-row btn-flex'>

    <a href="#" onClick={() => setModalShow(true)} className="btn btn-primary btn-change">Approve</a>
    <a href="#" onClick={() => setModalShow(true)} className="btn btn-primary btn-change">Disapprove</a>
    </div>
  </div>
</div>)
}
{(keyValue==="approve2"  || keyValue==null) && (
<div className="card" style={{width: "18rem"}} >
  <div className="card-body2">
    <h5 className="card-title">GIG BLOCK</h5>
    <h6 className="card-subtitle">gig details</h6>
    <p className="card-text">Here is the gig of your content you can check your gig details here we can approve or dissapprove your gig accroding to your past experience.so you can't chalnge admin is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div className='d-flex flex-row btn-flex'>
    <a href="#"onClick={() => setModalShow(true)} className="btn btn-primary">Block</a>
    <a href="#"onClick={() => setModalShow(true)} className="btn btn-primary">Unblock</a>
    </div>
  </div>
</div>
)
}
</div>

<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
 </div>



  )
  }
export default Hello
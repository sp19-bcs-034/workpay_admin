import React, { useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import { MyVerticallyCenteredModal } from '../Model'
import "./hello.scss";
import { hover } from '@testing-library/user-event/dist/hover';
const Hello = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setstatus] = React.useState("");

  
  const keyValue = searchParams.get("type")
  console.log(keyValue)
  const [publish, setPublish] = useState(true);
  const [block, setBlock] = useState(false);
  return (
    <div className="div" id='main' >

      <div className="divvv" >
        {/* <div className="item">
             <Link to="/" style={{ textDecoration: "none" }}>
            <span className='asad'>HOME</span>
            </Link>
          </div> */}
        <button
          onClick={() => { setBlock(false); setPublish(true) }}
          style={{
            backgroundColor: 'purple',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s'
          }}

          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'lightblue')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'blue')}

        >
          GIG PUBLISH APPROVAL
        </button>
        <button
          onClick={() => { setBlock(true); setPublish(false) }}
          style={{
            backgroundColor: 'brown',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'lightblue')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'blue')}
        >
          GIG BLOCK APPROVAL
        </button>
      </div>

{/* <button onClick={()}>Test</button> */}
      <div className='mc-flex'>
        {publish && (keyValue === "approve1" || keyValue == null) && (

          <div className="card" style={{ width: "18rem" }} >
            <div className="card-body1">
              <h5 className="card-title">GIG PUBLISH APPROVAL 1</h5>
              <h6 className="card-subtitle">GIG DETAILS</h6>
              <p className="card-text"></p>
              <div className="productCard">
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
                <div className="product-person">
                  
                {<div className="d-flex">
                  <Avatar src='./Profile.png' />
                  <div className='btn-flex'>

                    <a href="#" onClick={() => setModalShow(true)} className="btn btn-primary">Block</a>
                    <a href="#" onClick={() => setModalShow(true)} className="btn btn-primary">Unblock</a>

                  </div>
                </div>}
                  
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>
              </div>
              <div className="productCard1" >
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>
              </div>
              <div className="productCard2" >
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>
              </div>
              <Link className="productCard3" to={`/product/${1}`}>
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>
              </Link>





              <div className='d-flex flex-row btn-flex'>

                <a href="#" onClick={() => setModalShow(true)} className="btn btn-primary btn-change">Approve</a>
                <a href="#" onClick={() => setModalShow(true)} className="btn btn-primary btn-change">Disapprove</a>
              </div>
            </div>
          </div>)
        }
        {block && (keyValue === "approve2" || keyValue == null) && (
          <div className="card" style={{ width: "18rem" }} >
            <div className="card-body2">
              <h5 className="card-title">GIG BLOCK</h5>
              <h6 className="card-subtitle">gig details</h6>
              <Link className="productCard" to={`/product/${1}`}>
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>
              </Link>
              <Link className="productCard1" to={`/product/${1}`}>
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>
              </Link>
              <Link className="productCard2" to={`/product/${1}`}>
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>
              </Link>
              <Link className="productCard3" to={`/product/${1}`}>
                <img src="https://images.unsplash.com/photo-1619183744799-68f1fd8f1edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmslMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="nothing" style={{ width: "18rem" }} />
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

                  <FavoriteIcon style={{ color: 'grey' }} />
                  <span className="price">{`$${500}`}</span>
                </div>

              </Link>

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
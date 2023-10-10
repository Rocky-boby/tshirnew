import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcartTotal ,removeItem ,decreaseItemQuantity,incriseItemQuantity} from '../../redux/Cartslice'
import { Link } from 'react-router-dom/dist';

const Cart = () => {
    const {cart,totalPrice} = useSelector((state)=>state.allcart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getcartTotal())
    },[])

  return (
    <>
    <section className="bradcamp_sec">
      <div className="container">
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <span>
                    <i className="fa-solid fa-house" />
                  </span>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="">Data</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
    {/* ========= bradcamp sec end ======= */}
    <section className="cat_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <table>
              <tbody>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                  <th>REMOVE</th>
                </tr>
                {cart.length === 0 ? (
  <tr>
    <td colSpan="5">Cart is empty<br/><Link to='/product' className='proceed_btn sh'>Shop Now</Link></td>

  </tr>
) : (
  cart.map((data) => (
    <tr>
                  <td className="cart_img">
                    <img src={`/assets/images/products/${data.image}`} />
                    <div className='text-start'>
                      <h5>{data.title}</h5>
                     
                      <span><b>Color:</b> {data.color}</span><br/>
                      <span><b>Size:</b> {data.size}</span>
                     
                    </div>
                  </td>
                  <td>₹{data.price}</td>
                  <td>
                    <div className="cart-qty">
                      <button className="qtyminus" aria-hidden="true" onClick={()=>dispatch(decreaseItemQuantity(data.id))} >
                        −
                      </button>
                      <input
                        type="number"
                        name="qty"
                        id="qty"
                        min={1}
                        max={10}
                        step={1}
                        Value={data.quantity}
                      />
                      <button onClick={()=>dispatch(incriseItemQuantity(data.id))} className="qtyplus" aria-hidden="true">
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>₹{data.price*data.quantity}</strong>
                  </td>
                  <td>
                    <button href="" style={{ color: "#000" }} onClick={()=>dispatch(removeItem(data.id))}>
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </td>
                </tr>
  ))
)}
            
              </tbody>
            </table>
          </div>
          {/* <div className="col-lg-6">
            <div className="cupon_code">
              <input type="text" name="" className="form-control" />
              <a href="#" className="cp-apply">
                Apply coupon
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <a href="#" className="update_cart">
              Update basket
            </a>
          </div> */}
         
          <div className="col-lg-5">
            <div className="cart_total">
              <h4>BASKET TOTALS</h4>
              <ul>
              <li>
                  <div className="left_cart">
                    <h6>Total Items</h6>
                  </div>
                  <div className="right_cart">
                    <h6>{cart.length}</h6>
                  </div>
                </li>
                <li>
                  <div className="left_cart">
                    <h6>Subtotal</h6>
                  </div>
                  <div className="right_cart">
                    <h6>{totalPrice}</h6>
                  </div>
                </li>
                <li>
                  <div className="left_cart">
                    <h6>Shipping</h6>
                  </div>
                  <div className="right_cart">
                    <h6>Free shipping</h6>
                    <h6>
                      Shipping to <strong>West Bengal</strong>.
                    </h6>
                    <h6>
                      <a href="#">Change address</a>
                    </h6>
                  </div>
                </li>
                <li>
                  <div className="left_cart">
                    <h4>TOTAL</h4>
                  </div>
                  <div className="right_cart">
                    <h4>{totalPrice}</h4>
                    <h6>(includes ₹11.87 2.5% CGST, ₹12.17 2.5% SGST)</h6>
                  </div>
                </li>
              </ul>
              {cart.length <= 0 ? (
                <>
                   <p style={{color:'red', margin:'5px' ,textAlign:'center', fontWeight:'500'}}>No products in your cart.</p>
              <Link to="/product" className="proceed_btn">
                Go to the shop now!
              </Link></>
             
              ) : (
                <Link to="/checkout" className="proceed_btn">
                Proceed to checkout
                </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Cart
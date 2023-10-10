import React from 'react'
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const {cart, totalQuantity,totalPrice} = useSelector((state)=>state.allcart);
    console.log(cart)
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
    <section className="checkout_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="ceckoutinput_area">
              <p>
                Already have an account?{" "}
                <a href="#" className="check_login">
                  login/Signup
                </a>
              </p>
              <span style={{ display: "block" }}>Or</span>
              <p>Checkout as Guest</p>
              <div className="delivery_form">
                <h4>Delivery Address</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name "
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name "
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone No."
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="PIN No."
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town Village"
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City/District"
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="State"
                          name=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address (House No, Building, Street, Area)"
                          name=""
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            {/* <div className="check_offer_area">
              <h6>
                <img
                  width={20}
                  height={20}
                  src="https://img.icons8.com/ios/50/loyalty-card.png"
                  alt="loyalty-card"
                />{" "}
                Offers &amp; Benefits
              </h6>
              <div className="offer-code">
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="Enter code"
                />
                <a href="#" className="Apply_now">
                  Apply
                </a>
              </div>
            </div> */}
            <div className="price_details">
              <h5>Price Details ( {cart.length} items)</h5>
              <div className="mrp-text">
                <span>Total MRP (Inc. of Taxes)</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="mrp-text">
                <span>Total Quantity</span>
                <span>{totalQuantity} pics</span>
              </div>
              <div className="mrp-text">
                <span>Shipping</span>
                <span style={{ color: "rgb(9, 181, 9)" }}>
                  <span
                    style={{
                      textDecorationLine: "line-through",
                      color: "rgb(0, 0, 0)"
                    }}
                  >
                    ₹49
                  </span>{" "}
                  Free
                </span>
              </div>
              <div className="mrp-text">
                <span>Cart Total</span>
                <span>{totalPrice}</span>
              </div>
            </div>
            <div className="total_area">
              <h5>
                TOTAL AMOUNT <span>₹{totalPrice}</span>
              </h5>
              {/* <p>You Saved ₹1501 on this order</p> */}
              <button className="checkout-btn">checkout securely</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default CheckOut
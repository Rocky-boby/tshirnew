
import React from 'react'

const Register = () => {
  return (
    <div
           
            className="login_content"
        
          >
            <p>
              Login to purchase products, add to your wishlist and follow your
              favourite brands!
            </p>
            <form action="">
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter email password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Birthday</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter email password"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""> Address</label>
                <input
                  type="text"
                  className="form-control"
                  required=""
                  placeholder=" Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""> State</label>
                <input
                  type="text"
                  className="form-control"
                  required=""
                  placeholder=" State"
                />
              </div>
              <div className="form-group">
                <label htmlFor=""> City</label>
                <input
                  type="text"
                  className="form-control"
                  required=""
                  placeholder=" City"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Postcode/zip</label>
                <input
                  type="text"
                  className="form-control"
                  required=""
                  placeholder="Postcode/zip"
                />
              </div>
              <div>
                <p>
                  <input type="checkbox" style={{ marginRight: 5 }} />
                  By creating an account you agree to THE Galaxy Coins Terms and
                  Conditions, and Privacy Policy
                </p>
              </div>
              <div className="form-group">
                <a href="#" className="login">
                  Create Account
                </a>
              </div>
            </form>
          </div>
  )
}

export default Register

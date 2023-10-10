
import React from 'react'

const Login = () => {
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
        <a href="#" className="login">
          Login
        </a>
      </div>
      <div className="text-center">
        <a
          href="#"
          style={{ display: "block", padding: "20px 0 10px" }}
        >
          FORGOTTEN PASSWORD?
        </a>
      </div>
    </form>
  </div>
  )
}

export default Login
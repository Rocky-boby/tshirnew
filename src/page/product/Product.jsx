import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../redux/Cartslice';
import { Link } from 'react-router-dom/dist';
const Product = () => {
  const items = useSelector((state) => state.allcart.items);
  const dispatch =useDispatch();
  console.log(items)
  return (
    <div>
<>
  {/* ======== header end ======== */}
  {/* ========= bradcamp sec start ======= */}
  <section className="bradcamp_sec">
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span>
                  <i className="fa-solid fa-house" />
                </span>
                Home
              </Link>
            </li>
            
            <li className="breadcrumb-item active" aria-current="page">
              <a href="" className='cnone'>Product</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  {/* ========= bradcamp sec end ======= */}
  <section className="product_list_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="form-group">
            <div className="product_search">
              <input
                type="text"
                className="form-control"
                placeholder="Search product...."
                name=""
              />
              <a href="#" className="pd-srch-btn">
                <i className="fa-solid fa-magnifying-glass" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="form-group">
            <select className="form-select" aria-label="Default select example">
              <option selected="">Search by:</option>
              <option value={1}>M</option>
              <option value={2}>L</option>
              <option value={3}>XL</option>
              <option value={3}>XXL</option>
            </select>
          </div>
        </div>
    {items.map((item)=>(
        <div className="col-lg-4" key={item.id}>
        <div className="product_main">
          <div className="productlist_img">
            <span className="sale_tag">SALE</span>
            <Link to={`/product/${item.slug}`}><img src={`/assets/images/products/${item.image}`} alt="" className="img-fluid" />
            </Link> </div>
          <div className="productlist_content">
            <h4>{item.title}</h4>
            <div className="product_details_content">
              <div>
                <h5>
                ₹{item.price} <del>₹1000</del>
                </h5>
                <ul className="reating_list">
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">5.9</a>
                  </li>
                </ul>
              </div>
              <div>
                <a onClick={()=>dispatch(addtocart(item))} href="#" className="wishlist">
                  <i className="fa-solid fa-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    

      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Product

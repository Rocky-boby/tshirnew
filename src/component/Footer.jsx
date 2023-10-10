import React from 'react'
import { Link } from 'react-router-dom/dist'

const Footer = () => {
  return (
    <div>
       {/* ====== footer start ====== */}
    <footer>
      <div className="footer_top">
        <div className="container">
          <p />
          <p>
            <strong>Free Shipping on All Orders</strong> | Get Extra ₹100 OFF on
            Spent of ₹999 Use Code: <strong>BEYOUNG100</strong>
          </p>
          <p />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer_area">
              <Link to="/">
                <img src="/assets/images/footer-logo.png" alt="" className="img-fluid" />
              </Link>
              <ul className="social_contact">
                <li>
                  <a href="#">
                    <img
                      width={48}
                      height={48}
                      src="https://img.icons8.com/color/48/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      width={48}
                      height={48}
                      src="https://img.icons8.com/color/48/facebook.png"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      width={48}
                      height={48}
                      src="https://img.icons8.com/color/48/whatsapp--v1.png"
                      alt="whatsapp--v1"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer_area">
              <h3>opening times</h3>
              <p>
                TUESDAY- SUNDAY
                <br />
                <strong>12:00pm -2:15pm</strong> Lunch
                <br /> <strong>6:00pm-10:15pm</strong> Dinner
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_area">
              <h3>our location</h3>
              <p>
                364-366 Station Road,
                <br />
                Harrow On The Hill, HA1 2DE
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_area">
              <h3>Contact</h3>
              <ul className="ct_dets">
                <li>
                  <a href="#">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M15.9429 22.7377L11.0857 17.3691L12.6857 15.6006L15.9429 19.2007L22.4 12.0636L24 13.8321L15.9429 22.7377ZM11.4286 8.84245L20.5714 2.52641H2.28571L11.4286 8.84245ZM11.4286 11.3689L2.28571 5.05283V17.6849H8.17143L10.4571 20.2113H2.28571C1.65714 20.2113 1.11924 19.9641 0.672 19.4698C0.224 18.9746 0 18.3797 0 17.6849V2.52641C0 1.83165 0.224 1.2371 0.672 0.742765C1.11924 0.247588 1.65714 0 2.28571 0H20.5714C21.2 0 21.7383 0.247588 22.1863 0.742765C22.6335 1.2371 22.8571 1.83165 22.8571 2.52641V8.02136L20.5714 10.5478V5.05283L11.4286 11.3689Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    info@hakkagarden.co.uk
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={23}
                        viewBox="0 0 20 23"
                        fill="none"
                      >
                        <path
                          d="M10 12.5971V1.25971C10 0.90279 10.1067 0.6034 10.32 0.361536C10.5326 0.120512 10.7963 0 11.1111 0H18.8889C19.2037 0 19.4674 0.120512 19.68 0.361536C19.8933 0.6034 20 0.90279 20 1.25971V7.55825C20 7.91516 19.8933 8.21413 19.68 8.45516C19.4674 8.69702 19.2037 8.81795 18.8889 8.81795H13.3333L10 12.5971ZM12.2222 6.29854H17.7778V2.51941H12.2222V6.29854ZM12.2222 6.29854V2.51941V6.29854ZM18.8333 22.7377C16.4444 22.7377 14.1159 22.1339 11.8478 20.9263C9.57889 19.7195 7.56963 18.1238 5.82 16.1394C4.06963 14.1558 2.66222 11.8778 1.59778 9.30546C0.532593 6.73398 0 4.09405 0 1.38568C0 1.00777 0.111111 0.692839 0.333333 0.440898C0.555556 0.188956 0.833334 0.0629853 1.16667 0.0629853H5.66667C5.92593 0.0629853 6.15741 0.157463 6.36111 0.346419C6.56482 0.535376 6.68519 0.77682 6.72222 1.07075L7.44444 5.47973C7.48148 5.77366 7.47704 6.04114 7.43111 6.28216C7.38444 6.52402 7.27778 6.73944 7.11111 6.92839L4.41667 10.0147C5.19444 11.5263 6.17148 12.9435 7.34778 14.2662C8.52333 15.5889 9.81482 16.7331 11.2222 17.6989L13.8333 14.7386C14 14.5496 14.2178 14.4077 14.4867 14.3128C14.7548 14.2187 15.0185 14.1927 15.2778 14.2347L19.1111 15.1165C19.3704 15.1795 19.5833 15.321 19.75 15.541C19.9167 15.7619 20 16.0193 20 16.3132V21.415C20 21.7929 19.8889 22.1079 19.6667 22.3598C19.4444 22.6118 19.1667 22.7377 18.8333 22.7377ZM3.36111 7.62123L5.19445 5.54271L4.72222 2.5824H2.25C2.34259 3.4432 2.47222 4.2935 2.63889 5.13331C2.80556 5.97311 3.0463 6.80242 3.36111 7.62123ZM13.3056 18.8956C14.0278 19.2525 14.7641 19.536 15.5144 19.7459C16.2641 19.9559 17.0185 20.0923 17.7778 20.1553V17.384L15.1667 16.7856L13.3056 18.8956Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    +44 123 456 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="copy_right_p">
              Copyright@ <a href="">Oye Monkey</a> 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
    {/* ====== footer end ====== */}
    </div>
  )
}

export default Footer

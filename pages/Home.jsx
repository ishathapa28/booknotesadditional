import React, { useState, useEffect } from "react";
import '../App.css';
import fyplogo from '../images/fyplogo.png';
import box1 from '../images/box1.jpg';
import box2 from '../images/box2.jpg';
import historicalFiction from '../images/Historical_fiction.jpg';
import box3 from '../images/box3.jpg';
import box5 from '../images/box5.jpg';
import box6 from '../images/box6.png';
import box7 from '../images/box7.png';
import box8 from '../images/box8.jpg';
import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Button from '@mui/material/Button';



const Home = () => {
  const [Data, setData] = useState("");
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  

  const change = (e) => {
    const { name, value } = e.target;
    setData({[name]:value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/book/${Data.bookname}`);
  };
  console.log(Data);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        setUserID('');
      }
    });

    return () => unsubscribe();
  }, [auth]);





  
   return(
      <>
      <div className="navbar-container">
          <div className="nav-logo">
            <img src={fyplogo} alt="Logo" />
          </div>
          <div className="nav-address">
            <i className="fa-solid fa-location-dot"></i>
            Deliver to India
          </div>
          <div className="nav-search">
            <input 
              type="text"
              className="search-input"
              placeholder="Search Booknotes"
            />
            <button className="search-icon btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          

          <Link className="nav-signin nav-link active text-white" to="/myaccount" style={{ fontFamily: 'Arial', fontSize: '0.85rem',fontWeight: 700 }}>
            <i className="fa-regular fa-user"></i>
            My Account
            <ul className="dropdownMenu">
              <li><Button>My Account</Button></li>
              <li><button>Order Tracking</button></li>
              <li><button>Setting</button></li>
              <li><button>Sign Out</button></li>
            </ul>
          </Link>
          
          <Link className="nav-wishlist nav-link active text-white"to="/books">
            <i className="fa-regular fa-heart"></i>
            Wishlist
          </Link>

          <Link className="nav-cart nav-link active text-white" to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            
            Cart
          </Link>
      </div>

      <div className="panel">
        <div className="panel-all">
          <i className="fa-solid fa-bars"></i>
          All
        </div>
        <div className="panel-ops">
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Track Your Order</p>
          <p>Gift Cards</p>
          <p>Sell</p>
        </div>
        <div className="panel-deals">
          Shop deals in Books
        </div>
      </div>

      <div className="hero-section">
      <div className="hero-msg">
        <h1><strong>Welcome To <br /> Booknotes</strong></h1>
        <p>When it comes to searching for books, there is only one place to turn to – Booknotes.</p>
        <p><a href="file:///C:/Users/isha/Downloads/project/index.html" className="btn">Shop New</a></p>
      </div>
      
    </div>

    <div className="shop-section">
      <div className="box1 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${box1})` }}></div>
            <Link className="box-fantasy box-link active text-white" to="/genreFantasy" style={{ fontFamily: 'Arial', fontSize: '0.85rem',fontWeight: 700 }}>
              Fantasy
            </Link>
        </div>
      </div>
      <div className="box2 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${box2})` }}></div>
          <a href="file:///C:/Users/isha/Downloads/project/index.html">Science Fiction</a>
        </div>
      </div>
      <div className="box3 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${historicalFiction})` }}></div>
          <a href="file:///C:/Users/isha/Downloads/project/index.html">Historical Fiction</a>
        </div>
      </div>
      <div className="box4 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${box3})` }}></div>
          <a href="file:///C:/Users/isha/Downloads/project/index.html">Classics</a>
        </div>
      </div>
      <div className="box5 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${box5})` }}></div>
          <a href="file:///C:/Users/isha/Downloads/project/index.html">Thriller</a>
        </div>
      </div>
      <div className="box6 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${box6})` }}></div>
          <a href="file:///C:/Users/isha/Downloads/project/index.html">Young Adult</a>
        </div>
      </div>
      <div className="box7 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${box7})` }}></div>
          <a href="file:///C:/Users/isha/Downloads/project/index.html">Romance</a>
        </div>
      </div>
      <div className="box8 box">
        <div className="box-content">
          <div className="box-img" style={{ backgroundImage: `url(${box8})` }}></div>
          <a href="file:///C:/Users/isha/Downloads/project/index.html">Nonfiction</a>
        </div>
      </div>
    </div>

    <div className="blog">
      <div className="blog-title">
        <h2 className="blog-header">From Our Blog</h2>
        <p className="blog-line">"So many books, so little time." - Frank Zappa</p>
      </div>
      <div className="blog-main">
        <div className="blog-box">
          <div className="col1">
            <img src={blog1} alt="" height="368px" width="400px" />
          </div>
          <div className="blog-content">
            <h3>51 Nonfiction Hits of 2024 (So Far)</h3>
            <p>So much good stuff already in 2024: National Book Award finalist Hanif Abdurraqib&apos;s essay collection There's Always This Year explores universal themes—truth, justice, history, hope—by way of basketball as a cultural institution. In one of the year&apos;s buzziest books, debut author Patric Gagne candidly discusses her own unique psychological dilemma in Sociopath: A Memoir. Meanwhile, narrative history specialist Erik Larson (The Devil in the White City) conjures the anxious days just before the Civil War in The Demon of Unrest. Author and linguist Amanda Montell thinks out loud about thinking itself in her new book.</p>
            <div className="option-blog">
              <a href="file:///C:/Users/isha/Downloads/project/index.html"><button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-placement="bottom" title="Likes">
                <i className="far fa-heart"></i>  
              </button></a>
              <a href="file:///C:/Users/isha/Downloads/project/index.html"><button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-placement="bottom" title="Views">
                <i className="fas fa-eye"></i>
              </button></a>
              <a href="file:///C:/Users/isha/Downloads/project/index.html"><button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-placement="bottom" title="Comments">
                <i className="far fa-comments"></i>
              </button></a>
            </div>
            <div className="date1">
              <span>10 Feb 2024</span>
            </div>
          </div>
        </div>
        <div className="blog-box">
          <div className="col1">
            <img src={blog2} alt="" height="368px" width="400px" />
          </div>
          <div className="blog-content">
            <h3>From Time Travel to Tech Startups: Five Cross-Genre Book Trends We're Noticing</h3>
            <p>As life&apos;s rich pageant of books passes through Booknotes, we often take note of certain thematic and topical trends that suddenly feel like they're everywhere. These aren&apos;t genre trends, exactly. In fact, what makes them interesting is that they often manifest across multiple genres. We like to catalog these strange little pulses while they&apos;re still in circulation, so we&apos;ve gathered below a selection of new (published since 2022) and upcoming books sorted into five cross-genre trends we're currently spotting.</p>
            <div className="option-blog">
              <a href="file:///C:/Users/isha/Downloads/project/index.html"><button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Likes">
                <i className="far fa-heart"></i>  
              </button></a>
              <a href="file:///C:/Users/isha/Downloads/project/index.html"><button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Views">
                <i className="fas fa-eye"></i>
              </button></a>
              <a href="file:///C:/Users/isha/Downloads/project/index.html"><button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Comments">
                <i className="far fa-comments"></i>
              </button></a>
            </div>
            <div className="date1">
              <span>28 March 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div className="footer-section">
        <div className="foot-panel1">
          Back to Top
        </div>
        <div className="footpanel2-container">
          <div className="aboutsocials1">
            <h2>About Booknotes</h2>
            <p>At Booknotes, we're passionate about books and the magic they bring into our lives. We believe that a good book has the power to inspire, educate, and transform us, which is why we've made it our mission to bring you the best books from around the world.</p>
            <a href="file:///C:/Users/isha/Downloads/project/index.html"><i className="fab fa-facebook" aria-hidden="true"></i></a>
            <a href="file:///C:/Users/isha/Downloads/project/index.html"><i className="fab fa-twitter" aria-hidden="true"></i></a>
            <a href="file:///C:/Users/isha/Downloads/project/index.html"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
            <a href="file:///C:/Users/isha/Downloads/project/index.html"><i className="fab fa-google-plus" aria-hidden="true"></i></a>
            <a href="file:///C:/Users/isha/Downloads/project/index.html"><i className="fa fa-rss" aria-hidden="true"></i></a>
            <a href="file:///C:/Users/isha/Downloads/project/index.html"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a>
            <a href="file:///C:/Users/isha/Downloads/project/index.html"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
          </div>
          <div className="aboutsocials2">
            <h3>Information</h3>
            <a href="file:///C:/Users/isha/Downloads/project/index.html">Details</a>
          </div>
          <div className="aboutsocials3">
            <h4>Contact Us</h4>
            <p><i className="fas fa-map-marker-alt"></i>Address: Jamshedpur, Jharkhand <br /> Pin 831004 </p>
            <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+917488525821">+91-7488525821</a></p>
            <p><i className="fas fa-envelope"></i>Email: <a href="mailto:booknotes2024@gmail.com">booknotes2024@gmail.com</a></p>
          </div>
        </div>
        <div className="footpanel-3">
          <div className="logo1">
            <img src={fyplogo} alt="Logo" />
          </div>
        </div>
        <div className="footpanel-4">
          <div className="pages">
            <a>Conditions of Use</a>
            <a>Privacy Notice</a>
            <a>Your Ads Privacy Choices</a>
          </div>
          <div className="copyright">
            All Rights Reserved. © 2024 BOOKNOTES Design By : Support Team
          </div>
        </div>
      </div>
    </footer>
  </>
   )
  };
    


export default Home;
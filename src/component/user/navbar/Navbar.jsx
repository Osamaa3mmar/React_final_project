import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBriefcase,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import style from "./navbar.module.css";
import { toast } from "react-toastify";
import { useContext } from "react";
import  { CartContext } from "../Cart/CartContext/CartContext";
import { UserContext } from "../userContext/UserContext";
export default function MyNavbar() {
    const {userImage}=useContext(UserContext);
  
  const path = useLocation();
  const {cartCount}=useContext(CartContext);
  const commingSoonAlert=()=>{
    
    const toastId = toast.loading("d");

    toast.update(toastId,{
              render: "Comming soon !",
              type: "info",
              isLoading: false,
              autoClose: 3000, 
              pauseOnHover: true,
              closeButton:'true',
              position: "bottom-right",
              draggable: true,
            })
  }

  const navigate=useNavigate();


  const removeToken=()=>{
    localStorage.removeItem('token');
    navigate("/")
  }
  return (
    <Navbar expand="lg" className={style.navborder}>
      
      <Container>
        <Navbar.Brand as={Link} to={"/user"}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              as={Link}
              className={
                (path.pathname == "/user/home" ||path.pathname == "/user") ? style.active : style.navBtn
              } 
              
              to={"/user/home"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={
                path.pathname == "/user/contact" ? style.active : style.navBtn
              }
              to={"/user/contact"}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={
                path.pathname == "/user/about" ? style.active : style.navBtn
              }
              to={"/user/about"}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={
                path.pathname == "/user/products" ? style.active : style.navBtn
              }
              to={"/user/products"}
            >
              Product
            </Nav.Link>
          </Nav>
          <div className={style.navEnd}>
            <div className={"input " + style.searchBar}>
              <input
                type="text"
                id="search"
                className={style.searchInput}
                placeholder="What are you looking for?"
              />
              <label htmlFor="search">
                <FontAwesomeIcon
                  className={style.searchIcon}
                  icon={faMagnifyingGlass}
                />
              </label>
            </div>
            <div className={style.icons}>
              <Link className="text-dark" to={"/user"} onClick={commingSoonAlert} >
                <FontAwesomeIcon
                  className={
                    path.pathname == "/user/favorate"
                      ? style.activeCicle
                      : style.icon
                  }
                  icon={faHeart}
                />
              </Link>
              <Link to={"/user/cart"} className={style.cart}>
                <span className={style.cartCount}>{cartCount?cartCount:0}</span>
                <FontAwesomeIcon
                  className={
                    path.pathname == "/user/cart"
                      ? style.activeCicle
                      : style.icon
                  }
                  icon={faCartShopping}
                />
              </Link>
              <div className={style.profileContainer}>
                {userImage?<img className={`${style.avatar} ${ path.pathname === "/user/profile/main"?style.avatarActive:''}`} src={userImage}/>:
                <FontAwesomeIcon
                  className={
                    path.pathname == "/user/profile"
                      ? style.activeCicle
                      : style.icon + " " + style.profile
                  }
                  icon={faUser}
                />}
                <ul className={style.profileList}>
                  <li>
                    <Link to={"/user/profile"} className={style.profileItem}>
                    <FontAwesomeIcon icon={faUser}/>
                    <p className={style.profileItemText}>Profile</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/user/profile/orders"} className={style.profileItem}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p className={style.profileItemText}>My Order</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={removeToken} className={"text-danger "+style.profileItem}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                    <p className={style.profileItemText}>Logout</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

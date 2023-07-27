import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileMenu from "./profileMenu";
import { NavLink } from "react-router-dom";

function Header() {
  const [showButton, setShowButton] = useState(false);

  const handleWindowResize = () => {
    setShowButton(window.innerWidth < 1024);
  };
  const userDetails = useSelector((state) => state.auth.userInfo);
  const isSubscribed = useSelector((state) => state.auth.isSubscribed);

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener("resize", handleWindowResize);

    // Initial check for window width when the component mounts
    handleWindowResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar
      className="header-pd"
      collapseOnSelect
      bg="white"
      expand={true}
      style={{ minHeight: "60px" }}
    >
      <Container fluid>
        <Navbar.Brand lg={4}>
          <NavLink to={"/"}>
            <img
              src="assets/img/LD_logo_banner_long_dark_bg.png"
              alt=""
              className="image-cl"
            />
          </NavLink>
        </Navbar.Brand>
        <div className="navbar-holders">
          {showButton && (
            <ProfileMenu
              userDetails={userDetails}
              isSubscribed={isSubscribed}
            />
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { useMatch } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./header.css";

const ProfileMenu = ({ userDetails, isSubscribed }) => {
  const UserMenu = (
    <Image
      src={"assets/img/avataar.png"}
      alt="UserName profile image"
      roundedCircle
      style={{ width: "40px", height: "40px", objectFit: "cover" }}
    />
  );
  return (
    <NavDropdown title={UserMenu} id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">
        <h6>{userDetails.name ? userDetails.name : "NA"}</h6>
        <span>{userDetails.roles ? userDetails.roles.join(", ") : "NA"}</span>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.2">
        <a
          className="dropdown-item d-flex align-items-center"
          href={import.meta.env.VITE_BACKEND_URL + "/#/users/2"}
          target="_blank"
        >
          <i className="bi bi-person"></i>
          <span>My Profile</span>
        </a>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.3">
        <a className="dropdown-item d-flex align-items-center" href="#/">
          <i className="bi bi-envelope"></i>
          <span>{userDetails.email || "NA"}</span>
        </a>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">
        {" "}
        <a className="dropdown-item d-flex align-items-center" href="#/">
          <i className="bi bi-telephone"></i>
          <span>{userDetails.phone || "NA"}</span>
        </a>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">
        {" "}
        <a className="dropdown-item d-flex align-items-center" href="#/">
          <i className="bi bi-check-circle"></i>
          <span>{userDetails.state || "NA"}</span>
        </a>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">
        {" "}
        <a className="dropdown-item d-flex align-items-center" href="#/">
          {isSubscribed ? (
            <>
              {/* <i className="bi bi-bell-slash"></i> */}
              <i className="bi bi-check-circle"></i>
              <span>Subscribed</span>
            </>
          ) : (
            <>
              {/* <i className="bi bi-bell"></i> */}
              <i className="bi bi-clock-history"></i>
              <span>Subscription Pending</span>
            </>
          )}
        </a>
      </NavDropdown.Item>

      {useMatch("/price_co-pilot") ? (
        <Fragment>
          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="4.4" onClick={() => setOpenModal(true)}>
            {" "}
            <div className="dropdown-item d-flex align-items-center">
              <i className="bi bi-check-circle"></i>
              Set Rapnet Username/Password
            </div>
          </NavDropdown.Item>
        </Fragment>
      ) : (
        ""
      )}
    </NavDropdown>
  );
};

export default ProfileMenu;

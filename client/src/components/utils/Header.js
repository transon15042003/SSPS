import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, NavLink } from "react-router-dom";
import sampleAvt from "../../assets/img/default_avatar.jpg";
import "../../assets/styles/header.css";
import { UserContext } from "../../context/UserContext";
import { customerLinks, profileLinks, spsoLinks } from "./page_links";

export default function Header() {
  const { user } = useContext(UserContext);
  const [pageLinks, setPageLinks] = useState([]);
  const [, , removeCookie] = useCookies();

  useEffect(() => {
    if (user.isSPSO) {
      setPageLinks(spsoLinks);
    } else {
      setPageLinks(customerLinks);
    }
  }, [user]);

  const handleLogout = (e) => {
    removeCookie("auth", { path: "/" });
    localStorage.clear();
    window.location.assign("/");
  };

  return (
    <header className="sticky-xl-top">
      <nav className="navbar navbar-expand-lg p-1 navbar-light bg-light sticky-top">
        <div className="container">
          {user.token !== null && <ToggleBtnSmallScreen />}
          <NavLink className="me-0 me-lg-3 navbar-brand my-brand" to="/">
            SSPS
          </NavLink>
          {user.token !== null ? (
            <DropdownAvatar handleLogout={handleLogout} />
          ) : (
            <Link
              to="/login"
              role="button"
              className="btn fw-medium text-white order-lg-last login-btn"
              style={{ backgroundColor: "var(--color-bk1)" }}
            >
              Đăng nhập
            </Link>
          )}
          {user.token !== null && (
            <div className="collapse navbar-collapse" id="ssps-nav">
              <NavbarMenu pageLinks={pageLinks} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function ToggleBtnSmallScreen() {
  return (
    <button
      className="navbar-toggler"
      id="nav-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#ssps-nav"
      aria-controls="ssps-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function DropdownAvatar({ handleLogout }) {
  const links = profileLinks;
  const { user } = useContext(UserContext);

  return (
    <div className="dropdown order-lg-last mx-lg-3">
      <button
        className="btn dropdown-toggle d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={sampleAvt}
          alt="Avatar"
          width="32"
          height="32"
          className="rounded-circle"
          draggable="false"
        />
        <span className="mx-2">{user.isSPSO ? "SPSO" : "Sinh viên"}</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end text-small my-dropdown">
        {links.map(({ name, to }, index) => (
          <li key={index}>
            <Link className="dropdown-item" to={to}>
              {name}
            </Link>
          </li>
        ))}
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </li>
      </ul>
    </div>
  );
}

function NavbarMenu({ pageLinks }) {
  return (
    <ul className="navbar-nav fw-semibold fs-5 upper text-lg-center me-auto">
      {pageLinks.map(({ name, to }, index) => (
        <li key={index} className="nav-item m-2">
          <NavLink to={to} className="nav-link text-secondary-emphasis">
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

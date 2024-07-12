import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const closeDropdown = () => {
    setDropdownOpen({});
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">ইশাস</Link>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              id="navbar-toggle"
              href="#!"
              onClick={handleToggle}
              className={navbarOpen ? "active" : ""}
            >
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${navbarOpen ? "open" : ""}`}>
            <li>
              <Link to="/">হোম</Link>
            </li>
            <li>
              <Link to="about">আমাদের সম্পর্কে</Link>
            </li>
            <li>
              <Link to="/activities">কার্যক্রম</Link>
            </li>
            <li>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle(1);
                }}
              >
                সদস্যগণ
              </a>
              <ul
                className={`navbar-dropdown ${dropdownOpen[1] ? "open" : ""}`}
              >
                <li>
                  <Link to="/president" onClick={closeDropdown}>
                    সভাপতি
                  </Link>
                </li>
                <li>
                  <Link to="/vicepresident" onClick={closeDropdown}>
                    সহ-সভাপতি
                  </Link>
                </li>
                <li>
                  <Link to="/organizingsecretary" onClick={closeDropdown}>
                    সংগঠনিক সম্পাদক
                  </Link>
                </li>
                <li>
                  <Link to="/publicityeditor" onClick={closeDropdown}>
                    প্রচার সম্পাদক
                  </Link>
                </li>
                <li>
                  <Link to="/generalmember" onClick={closeDropdown}>
                    সাধারণ সদস্য
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/portfolio">পোর্টফোলিও</Link>
            </li>
            <li>
              <Link to="/faq">যোগাযোগ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;

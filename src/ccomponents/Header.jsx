import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

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
          <NavLink to="/">ইশাস</NavLink>
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
              <NavLink to="/" className="navlink" exact>
                হোম
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navlink">
                আমাদের সম্পর্কে
              </NavLink>
            </li>
            <li>
              <NavLink to="/activities" className="navlink">
                কার্যক্রম
              </NavLink>
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
                  <NavLink
                    to="/president"
                    onClick={closeDropdown}
                    className="navlink"
                  >
                    সভাপতি
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/vicepresident"
                    onClick={closeDropdown}
                    className="navlink"
                  >
                    সহ-সভাপতি
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/organizingsecretary"
                    onClick={closeDropdown}
                    className="navlink"
                  >
                    সংগঠনিক সম্পাদক
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/publicityeditor"
                    onClick={closeDropdown}
                    className="navlink"
                  >
                    প্রচার সম্পাদক
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/generalmember"
                    onClick={closeDropdown}
                    className="navlink"
                  >
                    সাধারণ সদস্য
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/portfolio" className="navlink">
                গ্যালারী
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className="navlink">
                যোগাযোগ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
const SideNav = ({ collapse_sideNav, trigger_hideSideNav }) => {
  const checkLocation = (location) => {
    if (window.location.pathname === location) {
      return "nav-link active";
    }
    return "nav-link";
  };
  return (
    <div>
      <nav
        className={
          collapse_sideNav
            ? "sidebar mobile-sidenav d-none d-sm-none d-md-block"
            : "sidebar d-none d-sm-none d-md-block"
        }
      >
        <div className='sticky-top' style={{ height: window.innerHeight }}>
          <ul className='nav flex-column'>
            <li className='nav-item mt-3'>
              {!collapse_sideNav && (
                <div
                  to='/'
                  className='nav-link'
                  onClick={() => trigger_hideSideNav(!collapse_sideNav)}
                >
                  <i className='fa fa-bars text-white' />
                </div>
              )}
              {collapse_sideNav && (
                <div
                  to='/'
                  className='nav-link'
                  onClick={() => trigger_hideSideNav(!collapse_sideNav)}
                >
                  <i className='fa fa-bars text-white' />
                </div>
              )}
            </li>
            <br />
            <li className='nav-item'>
              <Link className={checkLocation("/") || checkLocation("")} to='/'>
                <i className='fa fa-home' />{" "}
                <span className={collapse_sideNav ? "d-none" : ""}>Home</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={checkLocation("/contacts")} to='/contacts'>
                <i className='fa fa-users' />{" "}
                <span className={collapse_sideNav ? "d-none" : ""}>
                  Contacts
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={checkLocation("/reports")} to='/reports'>
                <i className='fa fa-file-o' />{" "}
                <span className={collapse_sideNav ? "d-none" : ""}>
                  Reports
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={checkLocation("/history")} to='/history'>
                <i className='fa fa-history' />{" "}
                <span className={collapse_sideNav ? "d-none" : ""}>
                  History
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={checkLocation("/database")} to='/database'>
                <i className='fa fa-server' />{" "}
                <span className={collapse_sideNav ? "d-none" : ""}>
                  Database
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={checkLocation("/calendar")} to='/calendar'>
                <i className='fa fa-calendar' />{" "}
                <span className={collapse_sideNav ? "d-none" : ""}>
                  Calendar
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={checkLocation("/settings")} to='/settings'>
                <i className='fa fa-cog' />{" "}
                <span className={collapse_sideNav ? "d-none" : ""}>
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;

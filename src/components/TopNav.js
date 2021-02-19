import React from "react";

const TopNav = ({
  collapse_sideNav,
  currentUser,
  contacts,
  setCurrentUser,
}) => {
  return (
    <div>
      <nav
        className='navbar fixed-top navbar-expand-lg navbar-light bg-light ml-md-5 pl-md-2 border-bottom'
        style={{ zIndex: !collapse_sideNav ? "-1" : "0" }}
      >
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto d-none d-sm-block'>
            {collapse_sideNav === true ? (
              <li className='nav-item active'>
                <button className='nav-link'>
                  <i className='fa fa-search rounded-circle' />
                </button>
              </li>
            ) : null}
          </ul>
          <div className='form-inline my-2 my-lg-0'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item dropdown'>
                <button
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='fa fa-user' /> &nbsp;
                  {Object.keys(currentUser).length > 0
                    ? currentUser.firstname + " " + currentUser.lastname
                    : "Login"}
                </button>
                <div
                  className='dropdown-menu dropdown-menu-right'
                  aria-labelledby='navbarDropdown'
                >
                  {contacts.length > 0 &&
                    contacts.map((contact) => (
                      <button
                        className='dropdown-item'
                        key={contact.id}
                        onClick={() => setCurrentUser(contact)}
                      >
                        {contact.firstname + " " + contact.lastname}
                      </button>
                    ))}
                  {contacts.length === 0 && (
                    <p className='text-center'>No Contact Found!</p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;

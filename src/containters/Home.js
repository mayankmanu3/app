import React, { Component } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import "../styles/Home.css";
import Contacts from "./Contacts";
class Main extends Component {
  state = {
    collapse_sideNav: true,
    updated_contacts: false,
    contacts: [],
    currentUser: {},
    currentUserChanged: false,
  };

  componentDidMount = () => {
    this.getContacts();
    this.getCurrentUser();
  };
  componentDidUpdate = () => {
    if (this.state.updated_contacts) {
      this.getContacts();
      this.getCurrentUser();
      this.setState({ updated_contacts: false });
    }
    if (this.state.currentUserChanged) {
      this.getContacts();
      this.getCurrentUser();
      this.setState({ currentUserChanged: false });
    }
  };
  getContacts = () => {
    let contacts = localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : null;
    if (contacts !== null) {
      this.setState({ contacts });
    }
  };

  getCurrentUser = () => {
    let currentUser = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;
    if (currentUser !== null) {
      this.setState({ currentUser });
      setTimeout(() => {
        this.loginCheck(currentUser.id);
      }, 500);
    }
  };
  setCurrentUser = (contact) => {
    localStorage.setItem("currentUser", JSON.stringify(contact));
    this.setState({ currentUser: contact, currentUserChanged: true });
  };

  loginCheck = (id) => {
    let loadContacts = [...this.state.contacts];
    let getIndex = loadContacts.findIndex((contact) => contact.id === id);
    loadContacts.splice(getIndex, 1);
    this.setState({ contacts: loadContacts });
  };

  trigger_hideSideNav = (value) => {
    this.setState({
      collapse_sideNav: value,
    });
  };

  render() {
    const {
      collapse_sideNav,
      currentUserChanged,
      currentUser,
      contacts,
    } = this.state;
    const { match, history } = this.props;
    return (
      <div>
        <div className='d-flex flex-row'>
          <SideNav
            collapse_sideNav={collapse_sideNav}
            trigger_hideSideNav={this.trigger_hideSideNav}
            match={match}
            history={history}
          />
          <Contacts
            updated_contacts={(status) =>
              this.setState({ updated_contacts: status })
            }
            currentUserChanged={currentUserChanged}
            currentUserChangedStatus={(status) =>
              this.setState({ currentUserChanged: status })
            }
          />
        </div>
        <TopNav
          collapse_sideNav={collapse_sideNav}
          currentUser={currentUser}
          contacts={contacts}
          setCurrentUser={this.setCurrentUser}
          match={match}
          history={history}
        />
      </div>
    );
  }
}

export default Main;

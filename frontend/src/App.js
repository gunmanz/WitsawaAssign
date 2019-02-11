import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap"; // package กำหนดให้ไปลิงก์ใหม่โดยไม่ refresh page

class App extends Component {
  render() {
    return (
      <div> {/*ตั้งชื่อ div กรุ๊ปนี้ = App container*/}
        <Navbar fluid collapseOnSelect> {/*แถบ navbar สีเทา*/}
          <Navbar.Header> {/*กำหนดข้อความเป็น header*/}
            <Navbar.Brand>
              <Link to="/">Witsawa</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse> {/* Set responsive */}
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/daily">
                <NavItem>Daily</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;

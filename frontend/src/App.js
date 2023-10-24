import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import Profile from "./components/profile";

class App extends Component {
  render() {
    return (
      <>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
        <Profile></Profile>
      </>
    );
  }
}

export default App;

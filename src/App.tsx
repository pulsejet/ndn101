import * as React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import Page01Intro from "./pages/01-intro";
import Page02Packets from "./pages/02-packets";

import "./App.scss";
import logo from "./ndn-logo.svg";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page01Intro />} />
          <Route path="intro" element={<Page01Intro />} />
          <Route path="packets" element={<Page02Packets />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="outer columns">
      <div className="column is-one-quarter">
        <aside className="menu main">
          <div className="logo">
            <img src={logo} alt="NDN Logo" />
          </div>

          <ul className="menu-list">
            <li>
              <NavLink to="/intro">Introduction</NavLink >
            </li>
            <li>
              <NavLink to="/packets">Packets</NavLink>
            </li>
          </ul>
        </aside>
      </div>

      <div className="column outlet">
        <Outlet />
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
    </div>
  );
}

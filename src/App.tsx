import * as React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import Page01Intro from "./pages/01-intro";
import Page02GettingStarted from "./pages/02-getting-started";
import Page03Packets from "./pages/03-packets";
import Page04Communication from "./pages/04-communication";
import Page05Multicast from "./pages/05-multicast";
import Page06Security from "./pages/06-security";

import logo from "./ndn-logo.svg";
import "./App.scss";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page01Intro />} />
          <Route path="intro" element={<Page01Intro />} />
          <Route path="getting-started" element={<Page02GettingStarted />} />
          <Route path="packets" element={<Page03Packets />} />
          <Route path="communication" element={<Page04Communication />} />
          <Route path="multicast" element={<Page05Multicast />} />
          <Route path="security" element={<Page06Security />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="app-outer columns">
      <div className="column is-2-desktop is-3 is-hidden-mobile">
        <aside className="menu main">
          <div className="logo">
            <img src={logo} alt="NDN Logo" />
          </div>

          <ul className="menu-list">
            <li>
              <NavLink to="/intro">Introduction</NavLink>
            </li>
            <li>
              <NavLink to="/getting-started">Getting Started</NavLink>
            </li>
            <li>
              <NavLink to="/packets">Packet Types</NavLink>
            </li>
            <li>
              <NavLink to="/communication">Communication</NavLink>
            </li>
            <li>
              <NavLink to="/multicast">Data Multicast</NavLink>
            </li>
            <li>
              <NavLink to="/security">Security</NavLink>
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

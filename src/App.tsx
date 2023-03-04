import * as React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import Page01Intro from "./pages/01-intro";
import Page01GettingStarted from "./pages/01-getting-started";
import Page02Packets from "./pages/02-packets";
import Page03Communication from "./pages/03-communication";
import Page04Multicast from "./pages/04-multicast";
import Page04Security from "./pages/03-security";
import Page04Router from "./pages/04-router";

import "./App.scss";
import logo from "./ndn-logo.svg";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page01Intro />} />
          <Route path="intro" element={<Page01Intro />} />
          <Route path="getting-started" element={<Page01GettingStarted />} />
          <Route path="packets" element={<Page02Packets />} />
          <Route path="communication" element={<Page03Communication />} />
          <Route path="multicast" element={<Page04Multicast />} />
          <Route path="security" element={<Page04Security />} />
          <Route path="router" element={<Page04Router />} />
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
            <li>
              <NavLink to="/router">Router</NavLink>
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

import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Page01Intro from "./pages/01-intro";
import Page02Packets from "./pages/02-packets";

import "./App.scss";

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
          <ul className="menu-list">
            <li>
              <Link to="/intro">Introduction</Link>
            </li>
            <li>
              <Link to="/packets">Packets</Link>
            </li>
          </ul>
        </aside>
      </div>

      <div className="column">
        <Outlet />
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

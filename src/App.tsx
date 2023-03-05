import * as React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import routes from "./Routes";

import logo from "./ndn-logo.svg";
import "./App.scss";

export default function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={routes[0].elem} />
          {routes.map(({path, elem}) => (
            <Route key={path} path={path} element={elem} />
          ))}
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
            {routes.map(({path, label}) => (
              <li key={path}>
                <NavLink to={path}>{label}</NavLink>
              </li>
            ))}
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

import React, { ReactNode } from 'react';
import "./layout.scss";

export const Layouts = () => {
  return (
    <div className="ndn-router-info layouts">
      <div className="layout-1">
        <header>
          {"Content Store"}
        </header>
        <main>
          {"CS"}
        </main>
      </div>
      <div className="layout-2">
        <header>
          {"Pending Interest Table"}
        </header>
        <main>
          {"PIT"}
        </main>
      </div>
      <div className="layout-3">
        <header>
          {"Forwarding Information Table"}
        </header>
        <main>
          {"FIB"}
        </main>
      </div>
    </div>
  );
};

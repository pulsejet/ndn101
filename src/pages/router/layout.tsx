import React, { ReactNode } from 'react';
import "./layout.css"

export const Layouts = () => {
  return (
    <div className="layouts">
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

// AppLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <header>My App Header</header>
      <main>
        <Outlet /> {/* Renders the child routes here */}
      </main>
      <footer>My App Footer</footer>
    </div>
  );
};

export default AppLayout;

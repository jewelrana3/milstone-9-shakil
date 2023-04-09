import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h3>App file</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
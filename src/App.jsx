import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <h3>App file</h3>
    </div>
  );
};

export default App;
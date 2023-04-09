import './App.css';
import Menubar from './container/Menubar/Menubar';
import React, { lazy, Suspense } from 'react';
import Categories from './components/Categories/Categories';
export default function app (props) {
  return (
    <div className="App">
  <Menubar />

    </div>
  );
}


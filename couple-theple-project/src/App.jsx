import { BrowserRouter, Link } from 'react-router-dom';
import './assets/tailwind.css';
import React from 'react';
import Nav from './components/Nav';
import Routing from './pages/Routing';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const App = ()=> {
  return (
    <>
    <BrowserRouter>
      <div className="flex justify-center bg-red-500 p-10">
        <Link to="/home" className="text-white text-5xl">
          커플 더플
        </Link>
      </div>
      <Nav />
      <Routing/>
    </BrowserRouter>
    </>
  );
};

export default App;

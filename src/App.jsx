import { useState } from 'react'
import './App.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import DropBar from './components/DropBar';
import VideoHeader from './components/VideoHeader';
import VideoFoot from './components/VideoFoot';
import RecordBoard from './components/RecordBoard';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import ScreenRecord from './pages/ScreenRecord';


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index  element={<Home />} />
        <Route index path="/signup" element={<SignUp />} />
        <Route index path="/screenrecod" element={<ScreenRecord />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <div>
      <div >
        <Outlet />
      </div>
    </div>
  );
};
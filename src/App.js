

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Comp/Login";
import Layout from "./Layout";
import Indexpage from "./Comp/Indexpage";
import Registerpage from "./Comp/Registerpage";
import AccountPage from "./AccountPage";
import PlacesPage from "./Comp/PlacesPage";
import PlacePage from "./Comp/PlacePage";
import BookingPage from "./Comp/BookingPage";
import { UserContextProvider } from "./UserContext";
import axios from "axios";
import Mybooking from "./Comp/Mybooking";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Indexpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registerpage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/places/:action" element={<PlacesPage />} />
            <Route path="/rental/:title" element={<PlacePage />} />
            <Route path="/booking/:title" element={<BookingPage />} />
            <Route path='/my-reservations' element={<Mybooking/>}/>
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;

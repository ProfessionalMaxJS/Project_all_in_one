import "./App.css";
import Products from "./components/products/products/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignupForm from "./pages/SignupForm";
import SigninForm from "./pages/SigninForm";
import UserPg from "./pages/UserPg";
import Cart from "./pages/Cart";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [change, setChange] = useState(null);
  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function hideMenu() {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    }
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      });
  }, []);

  console.log(isLoggedIn);
  return (
    // These custom colors are created in the tailwind config file
    <>
      <Navbar
        handleToggle={toggle}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserData={setUserData}
        change={change}
      />
      <Dropdown isOpen={isOpen} handleToggle={toggle} />
      <Routes>
        {/* for the route, it doesn't want a child but a child element  */}
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu setChange={setChange} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route
          path="/SigninForm"
          element={
            <SigninForm
              setUserData={setUserData}
              setIsLoggedIn={setIsLoggedIn}
              userData={userData}
            />
          }
        />
        <Route path="/UserPg" element={<UserPg />} />
        <Route path="/Cart" element={<Cart setChange={setChange} />} />
      </Routes>
      {/* <div className=" h-screen bg-gradient bg-gradient-to-tr from-theme-blue to-theme-pink ">
        <div className=""> */}
      {/* </div>
      </div> */}
      <Footer />
    </>
  );
}

export default App;

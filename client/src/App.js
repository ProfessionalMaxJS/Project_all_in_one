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
  const images = [
    {
      name: "Chakra Waffle",
      src: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81MWYzOTkyNC04YTRmLTQyZTUtYjZkNy00YjBlMzY5OGUwYzguanBlZw==",
    },
    {
      name: "Ocean Bagel",
      src: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80MGIwZDg0OS1lNjUyLTQ1YmUtYWE5ZC1mNzZmZmEzNTY0ZTIuanBlZw==",
    },
    {
      name: "French Toast w Fruits",
      src: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lMmNhMjc1ZC0wOGIxLTRlODctYjgyOS05NDc0OWVlZTE1ODYuanBlZw==",
    },
    {
      name: "Plain Omelette",
      src: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yODg3MGI1Zi04OTYzLTQxYTAtODk4MS1iZTk0MTNhZDZlMTcuanBlZw==",
    },
    {
      name: "Three Cheese Omelette",
      src: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81NzE3NmQ1MS02ODllLTQyMzMtOTA2Zi0zY2Q1NWFlNGUzZWI=",
    },
    {
      name: "Chakra Bagel",
      src: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zMjRhNGY5OS05YTU1LTQzZDctYjliNC0wMmQ1ZDdjYmMzZGMuanBlZw==",
    },
  ];

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
  const [countu, setCountu] = useState(0)

  return (
    // These custom colors are created in the tailwind config file
    <>
      <Navbar
        handleToggle={toggle}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserData={setUserData}
        change={change}
        setChange={setChange}
        countu={countu}
        setCountu={setCountu}
      />
      <Dropdown isOpen={isOpen} handleToggle={toggle} />
      <Routes>
        {/* for the route, it doesn't want a child but a child element  */}
        <Route path="/" element={<Home images={images} />} />
        <Route
          path="/Menu"
          element={<Menu images={images} setChange={setChange} />}
        />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/SignupForm"
          element={<SignupForm setChange={setChange} />}
        />
        <Route
          path="/SigninForm"
          element={
            <SigninForm
              setUserData={setUserData}
              setIsLoggedIn={setIsLoggedIn}
              userData={userData}
              setChange={setChange}
            />
          }
        />
        <Route path="/UserPg" element={<UserPg />} />
        <Route
          path="/Cart"
          element={
            <Cart images={images} change={change} setCountu={setCountu} setChange={setChange} />
          }
        />
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

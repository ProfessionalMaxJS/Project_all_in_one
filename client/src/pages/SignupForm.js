import React, { useState } from "react";
import Avatar from "../images/AvatarMaker.png";
import { Link } from "react-router-dom";

function SignupForm({ setChange, setIsLoggedIn }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function update(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user)
  }

  function handleSignUp() {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .catch((err) => console.log(err))
      .then((data) => {
        console.log(data);
        setChange(Math.random());
      })
      .then(
        setUser({
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }),
        setIsLoggedIn(true)
      );
  }
  // console.log(user);
  return (
    <div class="bg-gradient-to-t from-white to bg-cyan-400 h-screen flex justify-center items-center">
      <form class="flex flex-col justify-center items-center w-1/2">
        <img src={Avatar} alt="Avatar" class="w-32" />
        <h2 class="my-8 font-display font-bold text-3xl text-gray-700 text-center">
          Sign Up
        </h2>
        <div class="relative">
          <i class="fa fa-user absolute text-primarycolor text-xl"></i>
          <input
            name="name"
            type="text"
            placeholder="username"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg rounded"
            value={user.name}
            onChange={update}
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-user absolute text-primarycolor text-xl"></i>
          <input
            name="email"
            type="text"
            placeholder="Email"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 text-lg rounded"
            value={user.email}
            onChange={update}
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-lock absolute text-primarycolor text-xl"></i>
          <input
            name="password"
            value={user.password}
            onChange={update}
            type="password"
            placeholder="password"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg rounded"
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-lock absolute text-primarycolor text-xl"></i>
          <input
            name="password_confirmation"
            value={user.password_confirmation}
            onChange={update}
            type="password"
            placeholder="Confirm Password"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg rounded"
          />
        </div>
        <Link
          onClick={handleSignUp}
          to="/Menu"
          className="mt-5 py-6 px-10 bg-cyan-300 shadow-lg rounded-full text-3xl hover:bg-cyan-100 transition duration-300 ease-in-out flex items-center"
        >
          Sign Up
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </Link>
        <p className=" mt-3 text-sm font-mono italic mb-14  text-black">
          Already have an account?{" "}
          <Link to="/SigninForm" className="font-bold hover:text-cyan-400">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;

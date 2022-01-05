import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Avatar from "../images/AvatarMaker.png";

function SigninForm() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  function update(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSignIn(){
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then(r => r.json())
        .catch(err => console.log(err))
        .then(data => console.log(data))
        .then(setUser({name:"", email:"", password:"",password_confirmation:""}))
  }

  // console.log(user);
  return (
    <div class="bg-gradient-to-t from-white to bg-cyan-400 h-screen flex justify-center items-center">
      <form class="flex flex-col justify-center items-center w-1/2">
        <img src={Avatar} alt="Avatar" class="w-32" />
        <h2 class="my-8 font-display font-bold text-3xl text-gray-700 text-center">
          Welcome Back
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
        <Link
          onClick={handleSignIn}
          to="/SigninForm"
          className="mt-5 py-6 px-10 bg-cyan-300 shadow-lg rounded-full text-3xl hover:bg-cyan-100 transition duration-300 ease-in-out flex items-center"
        >
          Sign In
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
        <p className=" mt-3 text-sm font-mono italic mb-14  text-black">
          Don't have an account?{" "}
          <Link to="/SignupForm" className="font-bold hover:text-cyan-400">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SigninForm;

import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("Enter your email");
  const [password, setPassword] = useState("Enter your password");

  function login() {
    axios
      .post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error(res.data.message);
          return;
        }
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        if (res.data.user.type == "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      });
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-red-900">
      <div className="w-[450px] h-[450px] bg-blue-500 flex flex-col items-center justify-center">
        <img src="/logo.png" className="rounded-full w-[100px] " />
        <span>Email</span>
        <input
          defaultValue={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <span>Password</span>
        <input
          type="password"
          defaultValue={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="bg-white" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

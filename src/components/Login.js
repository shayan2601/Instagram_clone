import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ authUser }) => {
        console.log(authUser);

        dispatch(
          login({
            email: authUser.email,
            username: authUser.username,
            uid: authUser.uid,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="grid place-items-center mt-48">
      <div className="grid place-items-center border-2 border-gray-500 p-8 bg-white w-80">
        <img
          className="h-35 w-36 object-contain"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
        <form>
          <div className="flex flex-col space-y-2 mt-6">
            <input
              style={{ backgroundColor: "#f6f6f6" }}
              className="p-2 outline-none  focus-within:border-gray-300 border-2"
              placeholder="username"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "#f6f6f6" }}
              className="p-2 outline-none  focus-within:border-gray-300 border-2"
              placeholder="Phone Number, Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: "#f6fPf6" }}
              className="p-2 bg-yelloww focus-within:border-gray-300 border-2 outline-none"
              placeholder="Password"
            />
          </div>

          <div className="text-center">
            <button
              onClick={SignIn}
              className="bg-blue-400 outline-none border-none p-1 w-40 text-white font-bold rounded-sm mt-6 hover:bg-blue-500"
            >
              Log In
            </button>
            <p
              onClick={register}
              className="text-black p-1 w-40  font-bold rounded-sm mt-6 cursor-pointer hover:text-gray-800 mx-auto"
            >
              Register
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

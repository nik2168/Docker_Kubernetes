"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

const serverURI = process.env.NEXT_PUBLIC_SERVER;
console.log("server url from env", serverURI);
const server = serverURI || "http://localhost:3333";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
    };

    try {
      console.log("Sending request to:", `${server}/api/user`);
      console.log("Request data:", data);
      const response = await axios.post(`${server}/api/user`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response);
      console.log(response.data.user);
    } catch (error) {
      console.error("Full Error:", error);
      console.error("Error Response:", error.response);
      console.error("Error Message:", error.message);
      console.error("Error Config:", error.config);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center bg-slate-300 p-4">
        <h1 className="text-5xl font-bold">Hello world !</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            className="p-2 text-black rounded-md"
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="p-2 text-black rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

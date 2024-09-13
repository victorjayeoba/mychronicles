"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
export default function LogInPage() {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [formError, setFormError] = useState("");
  const [response, setResponse] = useState("");
  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data.email);
    try {
      const result = await signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(result);

      if (result) {
        route.push("/");
        setResponse("Successful");
      } else {
        setResponse("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error logging in:", err.message);
      setFormError(`Login error: ${err.message}`);
      setResponse(formError);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-slate-600">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {response && (
            <p
              className={`text-${
                response === "Successful" ? "green" : "red"
              }-500`}
            >
              {response}
            </p>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log in
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          Do not have an account yet?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

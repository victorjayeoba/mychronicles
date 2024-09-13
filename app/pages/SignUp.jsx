"use client";
import { useState } from "react";
import Head from "next/head"; // Next.js's Head component for meta tags
import { auth } from "../lib/firebase"; // Adjust the import path as necessary
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";

export default function SignupPage() {
  const [createUserWithEmailAndPassword, userCredential, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [formError, setFormError] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const result = await createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      const user = result.user;

      if (user) {
        await updateProfile(user, { displayName: data.firstName });
        console.log("User signed up and profile updated:", user);
        setResponse("Sign-up successful! Please log in.");
      }
    } catch (err) {
      console.error("Error signing up:", err.message);
      setFormError(`Sign-up error: ${err.message}`);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - My Chronicles</title>
        <meta
          name="description"
          content="Create an account on My Chronicles to access exclusive features and join our community."
        />
        <meta name="keywords" content="signup, registration, create account" />
        <meta property="og:title" content="Sign Up - My Chronicles" />
        <meta
          property="og:description"
          content="Join My Chronicles by creating your account. Enjoy personalized features and updates!"
        />
        <meta
          property="og:image"
          content="https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Sign+Up"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign Up - My Chronicles" />
        <meta
          name="twitter:description"
          content="Create an account on My Chronicles to access exclusive features and join our community."
        />
        <meta
          name="twitter:image"
          content="https://dummyimage.com/800x600/7715e8/fafafa.png&text=My+Chronicles+Sign+Up"
        />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 text-slate-600 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {response && (
              <p
                className={`text-${
                  response.startsWith("Sign-up successful") ? "green" : "red"
                }-500`}
              >
                {response}
              </p>
            )}
            {formError && <p className="text-red-500">{formError}</p>}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your First Name"
              />
            </div>

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
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

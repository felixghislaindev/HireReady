"use client";
import { useState } from "react";
import Head from "next/head";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Head>
        <title>Login | HireReady</title>
        <meta
          name="description"
          content="Log in to HireReady to continue your job search and interview preparation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
        <section className="bg-black text-white text-center py-12 px-8 w-full md:w-1/3 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-6">Welcome Back!</h1>
          <p className="text-gray-400 mb-8">
            Log in to continue preparing for your interviews and job search.
          </p>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border-2 border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border-2 border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300"
            >
              Log In with Email
            </button>
          </form>

          {/* Social Login Section */}
          <div className="mt-6">
            <p className="text-gray-400 mb-4">Or log in with</p>
            <div className="flex gap-4 justify-center">
              <button className="flex items-center px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300">
                <img
                  src="/icons/google-icon.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
              </button>
              <button className="flex items-center px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300">
                <img
                  src="/icons/yahoo-icon.svg"
                  alt="Yahoo"
                  className="w-5 h-5 mr-2"
                />
                Yahoo
              </button>
              <button className="flex items-center px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300">
                <img
                  src="/icons/github-icon.svg"
                  alt="GitHub"
                  className="w-5 h-5 mr-2"
                />
                GitHub
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-600 hover:text-purple-700">
              Sign up here
            </a>
          </p>
        </section>
      </main>
    </>
  );
};

export default Login;

"use client";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending data (e.g., via API)
    setSuccess(true);

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Head>
        <title>HireReady | Contact Support</title>
        <meta
          name="description"
          content="Get in touch with the HireReady support team for assistance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <NavBar />

      {/* Hero Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact Support 📩
        </h1>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Need help or have questions? Our team is here to assist you. Fill out
          the form below, and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-black to-purple-900 text-white">
        <div className="max-w-3xl mx-auto bg-black p-8 rounded-lg shadow-lg border-2 border-purple-600">
          {success && (
            <div className="bg-green-600 text-white p-4 rounded mb-6 text-center">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-purple-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h2 className="text-3xl font-semibold mb-6">
          Need Immediate Assistance? 🚀
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Check out our FAQs or email us directly at{" "}
          <strong>support@hireready.com</strong>. We're here to help you!
        </p>
        <a
          href="/faq"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-purple-700 transition-all duration-300"
        >
          Visit FAQs
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; 2025 HireReady. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;

import NavBar from "@/components/NavBar";
import Head from "next/head";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>HireReady | Pricing</title>
        <meta
          name="description"
          content="Explore our flexible pricing plans designed to suit your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <NavBar />

      {/* Pricing Hero Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Flexible Pricing Plans for Everyone 💼
        </h1>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Choose a plan that fits your needs and start your journey to smarter
          job hunting with HireReady. Whether you’re an individual or a team,
          we’ve got you covered!
        </p>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-black to-purple-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-12">Our Pricing Plans</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Basic Plan */}
          <div className="bg-black p-8 rounded-lg shadow-lg text-center w-full md:w-1/3 border-2 border-purple-600">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-extrabold mb-4">$0</p>
            <p className="text-gray-400 mb-6">Forever Free</p>
            <ul className="space-y-2 text-gray-300 text-left">
              <li>✅ Job Matching</li>
              <li>✅ Skill Gap Analysis</li>
              <li>❌ Advanced Company Insights</li>
              <li>❌ Personalized Interview Questions</li>
            </ul>
            <a
              href="#signup"
              className="block bg-purple-600 text-white py-3 px-6 rounded-lg text-lg mt-6 hover:bg-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-black p-8 rounded-lg shadow-lg text-center w-full md:w-1/3 border-2 border-purple-600">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-extrabold mb-4">$19.99</p>
            <p className="text-gray-400 mb-6">Per Month</p>
            <ul className="space-y-2 text-gray-300 text-left">
              <li>✅ Job Matching</li>
              <li>✅ Skill Gap Analysis</li>
              <li>✅ Advanced Company Insights</li>
              <li>✅ Personalized Interview Questions</li>
            </ul>
            <a
              href="#signup"
              className="block bg-purple-600 text-white py-3 px-6 rounded-lg text-lg mt-6 hover:bg-purple-700 transition-all duration-300"
            >
              Upgrade to Pro
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-black p-8 rounded-lg shadow-lg text-center w-full md:w-1/3 border-2 border-purple-600">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-extrabold mb-4">Custom</p>
            <p className="text-gray-400 mb-6">Tailored for Teams</p>
            <ul className="space-y-2 text-gray-300 text-left">
              <li>✅ All Pro Features</li>
              <li>✅ Team Collaboration Tools</li>
              <li>✅ Dedicated Account Manager</li>
              <li>✅ Custom Integrations</li>
            </ul>
            <a
              href="#contact"
              className="block bg-purple-600 text-white py-3 px-6 rounded-lg text-lg mt-6 hover:bg-purple-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Simplify Your Job Search? 🚀
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Start automating your job search, skill gap analysis, and interview
          prep today with HireReady’s powerful AI-driven tools.
        </p>
        <a
          href="#cta"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-purple-700 transition-all duration-300"
        >
          Choose Your Plan
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; 2025 HireReady. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Pricing;

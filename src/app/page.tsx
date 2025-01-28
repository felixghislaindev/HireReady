// /pages/index.tsx
import NavBar from "@/components/NavBar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>HireReady</title>
        <meta
          name="description"
          content="Transform the way you prepare for your interview"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Section */}
      <NavBar />

      {/* Main Section with Headline & CTA */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transform the way you prepare for your interview 🚀
        </h1>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          HireReady helps you match your skills with job descriptions, get
          insights into companies, and provides interview preparation tailored
          for you. Stand out in your job search and be ready for success!
        </p>
        <a
          href="#cta"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-purple-700 transition-all duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Key Features Section */}
      <section
        id="features"
        className="py-20 px-8 bg-black text-white text-center"
      >
        <h2 className="text-3xl font-semibold mb-12">
          Key Features of HireReady
        </h2>
        <div className="flex flex-col md:flex-row justify-around gap-8">
          <div className="bg-black p-8 rounded-lg shadow-lg text-center w-full md:w-1/3 border-2 border-purple-600">
            <h3 className="text-2xl font-semibold mb-4">Job Matcher</h3>
            <p className="text-gray-400">
              Paste a job description and let us match it with your profile. Get
              insights on how well your skills fit the job and learn about the
              qualifications needed.
            </p>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg text-center w-full md:w-1/3 border-2 border-purple-600">
            <h3 className="text-2xl font-semibold mb-4">Company Insights</h3>
            <p className="text-gray-400">
              Discover important details about the companies you are applying
              to, including their tech stack, recent news, and work culture.
            </p>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg text-center w-full md:w-1/3 border-2 border-purple-600">
            <h3 className="text-2xl font-semibold mb-4">Interview Prep</h3>
            <p className="text-gray-400">
              Get personalized interview questions, common topics, and practice
              exercises to help you prepare for interviews with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* New Section for AI-Driven Support */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h2 className="text-3xl font-semibold mb-6">
          Unleash the Full Potential of AI-Driven Interview Preparation 🤖
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Leverage the power of AI to get personalized job matching, company
          insights, and interview preparation tailored to your unique profile.
          With HireReady, you can make smarter decisions and approach your job
          search with confidence.
        </p>
      </section>

      {/* AI Code Generator Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h2 className="text-3xl font-semibold mb-6">
          See the Magic in Action ✨
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Try HireReady&rsquo;s job matching and interview preparation tools for
          yourself. Paste a job description or input your skills, and watch how
          our AI provides personalized job matches, skill gap analysis, and
          tailored interview questions in real-time!
        </p>
      </section>

      {/* Developers Love Using HireReady Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h2 className="text-3xl font-semibold mb-6">
          Developers Love Using HireReady 🚀
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Join the growing community of developers who trust HireReady to
          streamline their job search and interview prep. With our AI-driven
          tools, you can match your skills with job descriptions, gain insights
          into companies, and get personalized interview questions, all in one
          place!
        </p>
      </section>

      {/* Start Automating Your Job Search Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h2 className="text-3xl font-semibold mb-6">
          Start Automating Your Job Search Today with HireReady 🚀
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Take the first step towards smarter job hunting! Automate your job
          matching, skill gap analysis, and interview prep with
          HireReady&rsquo;s AI-powered platform. Focus on what matters and let
          us handle the rest.
        </p>
        <a
          href="#cta"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-purple-700 transition-all duration-300"
        >
          Discover More
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; 2025 HireReady. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;

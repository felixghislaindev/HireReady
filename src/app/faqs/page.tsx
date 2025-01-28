import NavBar from "@/components/NavBar";
import Head from "next/head";

const FAQ = () => {
  const faqs = [
    {
      question: "What is HireReady?",
      answer:
        "HireReady is a platform that helps job seekers prepare for interviews by providing job matching, skill gap analysis, company insights, and personalized interview preparation.",
    },
    {
      question: "How does the Job Matcher work?",
      answer:
        "The Job Matcher analyzes the job description you provide and matches it with your profile, highlighting your strengths and areas for improvement.",
    },
    {
      question: "Is HireReady free to use?",
      answer:
        "Yes, HireReady offers a free plan with basic features. You can upgrade to our Pro or Enterprise plans for more advanced tools.",
    },
    {
      question: "What is included in the Pro plan?",
      answer:
        "The Pro plan includes all features of the Basic plan plus advanced company insights, personalized interview questions, and more.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team through the 'Contact Support' section in the navigation menu or by emailing us at support@hireready.com.",
    },
  ];

  return (
    <>
      <Head>
        <title>HireReady | FAQs</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about HireReady."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <NavBar />

      {/* FAQ Hero Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">FAQs 🤔</h1>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Have questions about HireReady? We’ve got you covered! Check out the
          frequently asked questions below to learn more about how HireReady can
          help you.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-black to-purple-900 text-white">
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black p-6 mb-6 rounded-lg shadow-lg border-2 border-purple-600"
            >
              <h3 className="text-2xl font-bold mb-4">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white text-center py-24 px-8">
        <h2 className="text-3xl font-semibold mb-6">
          Didn’t find what you were looking for? 🚀
        </h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400">
          Get in touch with us for more information or personalized support.
          We're here to help you succeed!
        </p>
        <a
          href="/contact"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-purple-700 transition-all duration-300"
        >
          Contact Support
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; 2025 HireReady. All rights reserved.</p>
      </footer>
    </>
  );
};

export default FAQ;

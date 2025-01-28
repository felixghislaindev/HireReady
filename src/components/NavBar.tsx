// /components/NavBar.tsx
const NavBar = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center py-4 px-8">
      <div className="text-3xl font-bold">
        <a href="/" className="text-white">
          HireReady
        </a>
      </div>
      <nav className="space-x-6 text-lg">
        <a href="/" className="hover:text-purple-600">
          Home
        </a>
        <a href="#dashboard" className="hover:text-purple-600">
          Dashboard
        </a>
        <a href="/pricing" className="hover:text-purple-600">
          Pricing
        </a>
        <a href="/faqs" className="hover:text-purple-600">
          FAQs
        </a>
        <a href="/contact-support" className="hover:text-purple-600">
          Contact Support
        </a>
      </nav>
      <div className="space-x-4">
        <a
          href="#signup"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
        >
          Sign Up
        </a>
        <a
          href="#login"
          className="bg-transparent border-2 border-purple-600 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white"
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default NavBar;

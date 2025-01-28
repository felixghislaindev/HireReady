import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center py-4 px-8">
      <div className="text-3xl font-bold">
        <Link href="/" className="text-white">
          HireReady
        </Link>
      </div>
      <nav className="space-x-6 text-lg">
        <Link href="/" className="hover:text-purple-600">
          Home
        </Link>
        <Link href="/dashboard" className="hover:text-purple-600">
          Dashboard
        </Link>
        <Link href="/pricing" className="hover:text-purple-600">
          Pricing
        </Link>
        <Link href="/faqs" className="hover:text-purple-600">
          FAQs
        </Link>
        <Link href="/contact-support" className="hover:text-purple-600">
          Contact Support
        </Link>
      </nav>
      <div className="space-x-4">
        <Link
          href="#signup"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
        >
          Sign Up
        </Link>
        <Link
          href="#login"
          className="bg-transparent border-2 border-purple-600 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default NavBar;

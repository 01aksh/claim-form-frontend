const Navbar = () => {
  return (
    <nav className="text-white bg-gray-800">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="text-xl font-bold">Akshay App</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

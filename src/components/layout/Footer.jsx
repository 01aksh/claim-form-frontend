const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container px-4 mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Akshay App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

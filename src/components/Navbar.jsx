function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">

        <ul className="flex space-x-6">
          <li><a href="#about" className="text-white hover:text-blue-300">About</a></li>
          <li><a href="#projects" className="text-white hover:text-blue-300">Projects</a></li>
          <li><a href="#skills" className="text-white hover:text-blue-300">Skills</a></li>
          <li><a href="#contact" className="text-white hover:text-blue-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

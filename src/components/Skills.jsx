import React from 'react';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS

function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4">
          {/* Languages */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 text-4xl text-blue-600">
              <i className="bx bx-code"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <p className="text-gray-700 font-extrabold text-center space-y-4">
              <p className="group">
                <span className="group-hover:text-[#5E97D0] transition-colors duration-300">
                  C++
                </span>
                <box-icon name="c-plus-plus" type="logo" className="ml-2"></box-icon>
              </p>
              <p className="group">
                <span className="group-hover:text-[#ffe873] transition-colors duration-300">
                  Python
                </span>
                <box-icon name="python" type="logo" className="ml-2"></box-icon>
              </p>
              <p className="group">
                <span className="group-hover:text-[#f89820] transition-colors duration-300">
                  Java
                </span>
                <box-icon name="java" type="logo" className="ml-2"></box-icon>
              </p>
            </p>
          </div>

          {/* Frontend Technologies */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 text-4xl text-green-600">
              <i className="bx bx-laptop"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Frontend Technologies</h3>
            <p className="text-gray-700 font-extrabold text-center space-y-4">
              <p className="group">
                <span className="group-hover:text-[#61dbfb] transition-colors duration-300">
                  ReactJS
                </span>
                <box-icon name="react" type="logo" className="ml-2"></box-icon>
              </p>
              <p className="group">
                <span className="group-hover:text-[#F0DB4F] transition-colors duration-300">
                  JavaScript
                </span>
                <box-icon name="javascript" type="logo" className="ml-2"></box-icon>
              </p>
              <p className="group">
                <span className="group-hover:text-[#3490dc] transition-colors duration-300">
                  Tailwind CSS
                </span>
                <box-icon name="tailwind-css" type="logo" className="ml-2"></box-icon>
              </p>
              <p className="group">
                <span className="group-hover:text-[#f06529] transition-colors duration-300">
                  HTML
                </span>
                <box-icon name="html5" type="logo" className="ml-2"></box-icon>
              </p>
              <p className="group">
                <span className="group-hover:text-[#264de4] transition-colors duration-300">
                  CSS
                </span>
                <box-icon name="css3" type="logo" className="ml-2"></box-icon>
              </p>
              <p className="group">
                <span className="group-hover:text-[#563d7c] transition-colors duration-300">
                  Bootstrap
                </span>
                <box-icon name="bootstrap" type="logo" className="ml-2"></box-icon>
              </p>
            </p>
          </div>

          {/* Databases */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 text-4xl text-green-600">
              <box-icon name="data" type="solid" color="#091579"></box-icon>
            </div>
            <h3 className="text-2xl font-bold mb-4">Databases</h3>
            <p className="text-gray-700 font-extrabold text-center space-y-4">
              <p className="group">
                <span className="group-hover:text-[#00758f] transition-colors duration-300">
                  MySQL
                </span>
                <i className="fa fa-mysql ml-2" aria-hidden="true"></i>
              </p>
              <p className="group">
                <span className="group-hover:text-[#3FA037] transition-colors duration-300">
                  MongoDB
                </span>
                <box-icon name="mongodb" type="logo" className="ml-2"></box-icon>
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React from 'react';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS

function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 text-4xl text-blue-600">
              <i className="bx bx-code"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <p className="text-gray-700 font-extrabold text-center">
              <p>C++<box-icon name='c-plus-plus' type='logo' className="mt-5" ></box-icon> </p>
              <p>Python <box-icon name='python' type='logo' className="mt-5"></box-icon></p>
              <p>Java <box-icon name='java' type='logo' className="mt-5" ></box-icon> </p>

            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 text-4xl text-green-600">
              <i className="bx bx-laptop"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Frontend Technologies</h3>

            <p className="text-gray-700 font-extrabold text-center">
              <p>ReactJS<box-icon name='react' type='logo' ></box-icon></p>
              <p>JavaScript <box-icon name='javascript' type='logo' color='black' ></box-icon></p>
              <p>Tailwind CSS <box-icon name='tailwind-css' type='logo' color='black' ></box-icon></p>
              <p>HTML<box-icon name='html5' type='logo' color='#232120' ></box-icon></p>
              <p>CSS<box-icon name='css3' type='logo' color='#232120' ></box-icon></p>
              <p>Bootstrap<box-icon name='bootstrap' type='logo' color='#232120' ></box-icon></p>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 text-4xl text-green-600">
              <box-icon name='data' type='solid' color='#091579' ></box-icon>
            </div>
            <h3 className="text-2xl font-bold mb-4">Databases</h3>
            <p className="text-gray-700 font-extrabold text-center">
              <p>MySQL<i className="fa fa-mysql" aria-hidden="true"></i> </p>
              <p>MongoDB <box-icon name='mongodb' type='logo' color='#232120' ></box-icon></p>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

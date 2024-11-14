import React from 'react';
import myImage from '../images/my.jpg'; // adjust the path accordingly


const AboutMe = () => {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-gray-50 to-blue-50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Glass Card Effect */}
          <div className="backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Header with Gradient Text */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-700">
                About Me
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Profile Image with Border Animation */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-bold border-gray-700 ">
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur"></div> */}
                <img
                  src={myImage} // Use the imported image
                  alt="Profile"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                />


              </div>

              {/* Text Content */}
              <div className="md:ml-8 max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center md:text-left mb-4">
                  Atharva Dandgawhal
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                  I am currently in my final year, pursuing a Bachelor's degree in Information Technology from Pune Institute of Computer Technology. With hands-on experience in Web Development, I specialize in both frontend and backend technologies. I am passionate about learning and implementing emerging technologies, and I love tackling challenges to create innovative solutions. I am dedicated to building responsive web applications and enhancing user experiences. In addition to my academic journey, I maintain a CGPA of 8.36, which reflects my commitment to both theoretical knowledge and practical development skills.
                </p>

                {/* Animated Buttons */}
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full border-2 border-blue-500 text-blue-500 hover:text-white group"
                  >
                    <span className="absolute w-full h-0 transition-all duration-300 origin-center rotate-0 -translate-x-8 bg-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32"></span>
                    <a className="relative" href="https://drive.google.com/file/d/1I_xffg-gPGjqtLT2ueD4k6HHw3n9GVxZ/view?usp=drive_link">Download CV </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutMe;
import React, { useState } from 'react';
import "boxicons";
import "./css/projects.css";
import ImageModal from './modal/ImageModal';
function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
    setIsModalOpen(true);
  };
  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="cont bg-white p-6 rounded-lg shadow-lg m-3 ">
            <h3 className="text-2xl font-bold mb-4"><box-icon name='movie-play' type='solid' color='black' ></box-icon>Moviez - IMDb Website</h3>
            <p className="text-gray-700 font-light">
              Developed an interactive IMDb-inspired website enabling users to browse and view detailed movie information through a user-friendly interface for seamless browsing and selection. Integrated the OMDb API to fetch and display comprehensive movie details, enhancing the overall user experience with rich, real-time data on each film.
            </p>
            <p>
              Tech Stack:
              <span className="inline-block ml-2 mr-2 text-2xl">
                <box-icon
                  name="react"
                  type="logo"

                  rotate="90"
                ></box-icon>
              </span>
              {" ReactJS , "}
              <span className="inline-block ml-4 mr-2 text-2xl">
                <i className="fa-brands fa-node-js"></i>
              </span>
              {" NodeJS , "}
              <span className="inline-block ml-4 mr-2 text-2xl">
                <box-icon name="postgresql" type="logo"></box-icon>
              </span>
              {" PostgreSQL "}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <img
                src="/src/images/movie/m1.jpeg"
                alt="Moviez Project Screenshot 1"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/m1.jpeg')}
              />
              <img
                src="/src/images/movie/m2.jpeg"
                alt="Moviez Project Screenshot 2"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/movie/m2.jpeg')}
              />
              <img
                src="/src/images/movie/m3.jpeg"
                alt="Moviez Project Screenshot 3"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/movie/m3.jpeg')}
              />
              <img
                src="/src/images/movie/m4.jpeg"
                alt="Moviez Project Screenshot 4"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/movie/m4.jpeg')}
              />
              {isModalOpen && (
                <ImageModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  imageUrl={currentImage}
                />
              )}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg m-3 ">
            <h3 className="text-2xl font-bold mb-4"><box-icon name='restaurant' flip='horizontal' color='#252222' ></box-icon>DineEase - Restaurant</h3>

            <p className="text-gray-700 font-light">
              Created a comprehensive web application for a restaurant, enabling users to view menu items and book seats online. The app includes an efficient seat reservation system to streamline booking, enhancing both user experience and operational efficiency for the restaurant.


            </p>
            <p>
              Tech Stack:
              <span className="inline-block ml-2 mr-2 text-2xl">
                <box-icon
                  name="react"
                  type="logo"
                  flip="horizontal"

                ></box-icon>
              </span>
              {" ReactJS ,"}

              <span className="inline-block ml-4 mr-2 text-2xl">
                <i className="fa-brands fa-node-js"></i>
              </span>
              {" NodeJS ,"}
              <span className="inline-block ml-4 mr-2 text-2xl">
                <box-icon
                  name="mongodb"
                  type="logo"

                  flip="horizontal"
                ></box-icon>
                {/* MongoDB icon */}
              </span>
              {" MongoDB "}
            </p>
            <div className=" mt-6 grid grid-cols-2 gap-4">
              <img
                src="/src/images/resturant/home.png"
                alt="Moviez Project Screenshot 1"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/movie/m1.jpeg')}
              />
              <img
                src="/src/images/resturant/about.png"
                alt="Moviez Project Screenshot 2"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/movie/m2.jpeg')}
              />
              <img
                src="/src/images/resturant/popular.png"
                alt="Moviez Project Screenshot 3"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/movie/m3.jpeg')}
              />
              <img
                src="/src/images/resturant/order.png"
                alt="Moviez Project Screenshot 4"
                className="w-full h-auto rounded-lg shadow-md cursor-pointer full-img"
                onClick={() => handleImageClick('/src/images/movie/m4.jpeg')}
              />
              {isModalOpen && (
                <ImageModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  imageUrl={currentImage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

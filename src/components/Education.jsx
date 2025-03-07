import React from "react";
import "./css/education.css";
function Education() {
  return (
    <section id="education" className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 main-cont">
          <div className="edu-cont bg-gray-100 py-12 rounded-2xl hover:shadow-2xl">
          <i class="fa-solid fa-graduation-cap fa-2xl"></i>
            <h2 className="text-2xl font-bold">Bachelor of Engineering in Information Technology </h2>
            <p className="text-gray-700">
              Pune Institute Of Computer Technology, Pune
            </p>
            <p><b>CGPA: 8.40 </b> ,(2021-2025)  </p>
          </div>
          <div className="edu-cont bg-gray-100 py-12 rounded-2xl hover:shadow-2xl">
          <i class="fa-solid fa-school fa-2xl"></i>
            <h2 className="text-2xl font-bold ">
              Higher Secondary Certificate (HSC)
            </h2>
            <p className="text-gray-700">Sarhad Junior School and College</p>
            <p ><b>Percentage: 81.33 </b> , (2019-2021) </p>
          </div>
          <div className="edu-cont bg-gray-100 py-12 rounded-2xl hover:shadow-2xl">
          <i class="bx bxs-school text-4xl"></i>

            
            <h2 className="text-2xl font-bold">CBSE - 10th Grade</h2>
            <p className="text-gray-700">Sinhgad City School</p>
            <p><b>Percentage: 81.20 </b> , (2018-2019)</p>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Education;

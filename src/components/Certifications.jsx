import React, { useState } from 'react';
import CertificateModal from './modal/Certificate';
import "./css/certificate.css"
function Certifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState('');

  const openCertificate = (imagePath) => {
    setCurrentCertificate(imagePath);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" onClick={() => openCertificate('/src/images/certificate/Certificate of CPP Course of  Atharva Devidas Dandgawhal_page-0001.jpg')}>
              C++ crash course
            </a>
          </li>
          <li>
            <a href="#" onClick={() => openCertificate('/src/images/certificate/React certificate (1)_page-0001.jpg')}>
              React JS - Complete frontend web development guide (Udemy)
            </a>
          </li>
          <li>
            <a href="#" onClick={() => openCertificate('/src/images/certificate/sql_certifcate (1)_page-0001.jpg')}>
              SQL Complete Bootcamp (Udemy)
            </a>
          </li>
          <li>
            <a href="#" onClick={() => openCertificate('/src/images/certificate/ML CERTIFICATION_page-0001.jpg')}>
              Data Science and Machine Learning (Udemy)
            </a>
          </li>
          <li>
            <a href="#" onClick={() => openCertificate('/src/images/certificate/Mindluster_Certificate_mongodb_page-0001.jpg')}>
              MongoDB (Mindluster)
            </a>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          certificateImage={currentCertificate}
        />
      )}
    </section>
  );
}

export default Certifications;

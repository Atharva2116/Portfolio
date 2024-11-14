// src/components/modal/CertificateModal.js
import React from 'react';
import './certificate.css'; // For styling

const CertificateModal = ({ isOpen, onClose, certificateImage }) => {
    if (!isOpen) return null;

    return (
        <div className="certificate-modal-overlay" onClick={onClose}>
            <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={certificateImage} alt="Certificate" className="certificate-image" />
                <button className="certificate-modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CertificateModal;

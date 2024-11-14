// src/components/ImageModal.js
import React from 'react';

import './ImageModal.css'; // Create a separate CSS file for styling

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Project" className="image-modal-img" />
                <button className="image-modal-close" onClick={onClose}><span className='sp'>X</span> Close</button>
            </div>
        </div>
    );
};

export default ImageModal;

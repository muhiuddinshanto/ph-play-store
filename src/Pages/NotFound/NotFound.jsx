import React from 'react';
import { useNavigate } from 'react-router';
import { MdSearchOff } from 'react-icons/md';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <div className="not-found-code">
                <span className="highlight">4</span>
                <span>0</span>
                <span className="highlight">4</span>
            </div>

            <MdSearchOff className="not-found-icon" />

            <h2 className="not-found-title">পেজটি খুঁজে পাওয়া যায়নি</h2>

            <p className="not-found-message">
                আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে,
                নাম পরিবর্তন হয়েছে, বা আর নেই।
            </p>

            <div className="not-found-buttons">
                <button
                    className="btn-primary"
                    onClick={() => navigate('/')}
                >
                    হোমে ফিরে যান
                </button>
                <button
                    className="btn-secondary"
                    onClick={() => navigate(-1)}
                >
                    আগের পেজে যান
                </button>
            </div>
        </div>
    );
};

export default NotFound;
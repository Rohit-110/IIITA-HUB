import React from 'react';

const Notifications = ({ showNotifications }) => {
    return (
        <div className={`dropdown-menu ${showNotifications ? 'show' : ''}`} style={{ position: "absolute", top: "69px", right: "0",  backgroundColor: "#fff", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "16px", zIndex: "100" }}>
            <div className="dropdown-item mb-3" style={{ borderBottom: "1px solid #ddd" }}>
                <h5 style={{ margin: "0", color: "#333" }}>Notifications</h5>
            </div>
            <div className="dropdown-item mb-3" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "red", marginRight: "16px" }}></div>
                <div>
                    <h6 style={{ margin: "0", color: "#333" }}>New Internship Opportunities</h6>
                    <p style={{ margin: "0", color: "#777" }}>Explore new internship opportunities posted by various companies.</p>
                </div>
            </div>
            <div className="dropdown-item mb-3" style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "red", marginRight: "16px" }}></div>
                <div>
                    <h6 style={{ margin: "0", color: "#333" }}>Company X Hiring</h6>
                    <p style={{ margin: "0", color: "#777" }}>Company X is looking for talented individuals to join their team.</p>
                </div>
            </div>
            {/* Add more notification items as needed */}
        </div>
    );
};

export default Notifications;

import React from 'react';
import Navbar from '../Components/Navbar';

const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "SQL"],
    education: [
        {
            institution: "University of Example",
            degree: "Bachelor of Science in Computer Science",
            duration: "2016 - 2020"
        }
    ],
    experience: [
        {
            company: "Tech Company",
            position: "Software Engineer",
            duration: "2020 - Present",
            description: "Worked on various projects using React, Node.js, and MongoDB."
        }
    ],
    summary: "I am a passionate software engineer with experience in web development. I enjoy learning new technologies and solving complex problems."
};

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <div className="profile-header">
                    <h2>Profile</h2>
                </div>
                <div className="profile-body">
                    <div className="profile-picture">
                        {/* Add profile picture here */}
                        <img src="https://via.placeholder.com/150" alt="Profile" />
                    </div>
                    <div className="profile-details">
                        <h3>{profileData.name}</h3>
                        <p><strong>Email:</strong> {profileData.email}</p>
                        <p><strong>Phone:</strong> {profileData.phoneNumber}</p>
                        <h4>Skills:</h4>
                        <ul>
                            {profileData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h4>Education:</h4>
                        {profileData.education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <p><strong>{edu.degree}</strong></p>
                                <p>{edu.institution}</p>
                                <p>{edu.duration}</p>
                            </div>
                        ))}
                        <h4>Experience:</h4>
                        {profileData.experience.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <p><strong>{exp.position}</strong></p>
                                <p>{exp.company}</p>
                                <p>{exp.duration}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                        <h4>Summary:</h4>
                        <p>{profileData.summary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

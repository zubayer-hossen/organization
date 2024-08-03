// src/ProfileModal.jsx
import React, { useEffect, useState } from "react";
import "./ProfileModal.css"; // Import the CSS file for styling

const ProfileModal = () => {
  const [visible, setVisible] = useState(true);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    // Decrease the countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Hide the modal after 30 seconds
    const hideModalTimer = setTimeout(() => {
      setVisible(false);
    }, 15000);

    // Cleanup timers on component unmount
    return () => {
      clearInterval(timer);
      clearTimeout(hideModalTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setVisible(false)}>
          ×
        </button>
        <img
          className="profile-image"
          src="https://i.ibb.co/VxWfdRp/profile-pic-2.png" // Replace with actual image URL
          alt="Profile"
        />

        <h2>Zubayer Hossen</h2>
        <p className="detail">
          Zubayer Hossen is a skilled web designer and the creative mind behind
          our organization's website. With a passion for user-friendly and
          visually appealing designs, he has played a crucial role in enhancing
          our online presence. Zubayer's expertise in web development and design
          has significantly contributed to the success of various projects,
          ranging from community initiatives to large-scale events. In addition
          to his technical skills, Zubayer is dedicated to continuous learning
          and improvement, always staying updated with the latest industry
          trends.
        </p>
        <div className="patience">
          This content will disappear in
          <span className="count_down">{countdown}</span> seconds.
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

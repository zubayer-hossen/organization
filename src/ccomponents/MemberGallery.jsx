import { useState } from "react";
import "./MemberGallery.css";
import DataOfMembers from "./data/Data";

const MemberGallery = () => {
  const [membersdata, setMembersdata] = useState(DataOfMembers);

  const [nameFilter, setNameFilter] = useState("");
  const [bgFilter, setBgFilter] = useState("");

  const filteredMembers = membersdata.filter((user) => {
    return (
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.bg.toLowerCase().includes(bgFilter.toLowerCase())
    );
  });

  return (
    <div>
      <div className="filter-container">
        <div className="filtering">
          <input
            type="text"
            placeholder="Filter by name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by blood group"
            value={bgFilter}
            onChange={(e) => setBgFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="content_container">
        {filteredMembers.map((user) => (
          <div key={user.id} className="member-card">
            <div className="userid">
              <span>{user.id}</span>
            </div>
            <div className="member_pic_area">
              <img
                src={user.img === "#" ? user.noimg : user.img}
                alt={user.name}
                className="member-pic"
              />
            </div>
            <div className="member-info">
              <h2>{user.name}</h2>
              <p>Phone: {user.phone}</p>
              <p>
                Blood Group: <span className="bg_group">{user.bg}</span>
              </p>
              <div className="member-actions">
                <a
                  href={user.fb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook-btn"
                >
                  Facebook
                </a>
                <a href={`tel:${user.phone}`} className="message-btn">
                  CallMe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberGallery;

import React, { useState } from "react";
import "./MemberGallery.css";

const MemberGallery = () => {
  const Users = [
    {
      id: 1,
      name: "Md. Ismail Tarek",
      phone: "+8801950252338",
      fb: "https://www.facebook.com/ismail.tarek.3576",
      bg: "B+",
      img: "https://i.ibb.co/hLDf0bS/378719501-824372939341277-437632052074849597-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Md. Abdul Hamid",
      phone: "+8801777489848",
      fb: "https://www.facebook.com/profile.php?id=100011701744675",
      bg: "O+",
      img: "https://i.ibb.co/9yxFLXp/426830264-2081413122258726-6123699642609222257-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Md. Abdul Gofur Ghazi",
      phone: "+8801955002079",
      fb: "https://www.facebook.com/mdabdul.gafurgs",
      bg: "AB+",
      img: "https://i.ibb.co/mJhq5BW/404743140-752938503543123-749966827506526231-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Md. Khairul Islam",
      phone: "+8801943510559",
      fb: "https://www.facebook.com/khairul.runa",
      bg: "B+",
      img: "https://i.ibb.co/q0FcbHC/56786141-2276896145932611-5688002473457876992-n-removebg-preview.png",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Md. Dabir Hossain",
      phone: "+8801916615253",
      fb: "https://www.facebook.com/md.dobir.927",
      bg: " ",
      img: "https://i.ibb.co/8Y3p1Z8/48407502-817136068678772-5211327662710063104-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Md. Arafat Hossain",
      phone: "+8801322502908",
      fb: "https://www.facebook.com/profile.php?id=100095113609182",
      bg: " ",
      img: "https://i.ibb.co/9V0TC9x/433141171-255852980928487-4173211480964008311-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Md. Nurullah Bahar",
      phone: "+8801925-377100",
      fb: "https://www.facebook.com/profile.php?id=100082678175634",
      bg: " ",
      img: "https://i.ibb.co/PxzJ4zd/307684449-140415185391087-141971134215510242-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Md. Waiskuruni Hasan Emon",
      phone: "+8801926926592",
      fb: "https://www.facebook.com/mdemon.hassan.756",
      bg: " ",
      img: "https://i.ibb.co/84RqN2g/232969609-2637144353258545-4009724017019554300-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Md. Zubayer Hossen",
      phone: "+8801580856397",
      fb: "https://www.facebook.com/zubayer.hossen.359",
      bg: "A+ ",
      img: "https://i.ibb.co/93LcMFY/445234481-1917409708688880-8235258242458060738-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Md. Abdus Selim",
      phone: "+8801635559960",
      fb: "https://www.facebook.com/abdusselim999",
      bg: " O+",
      img: "https://i.ibb.co/18cNh2Z/IMG-4399.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      name: "Md Rahmat Ali Ghazi",
      phone: "+8801704456453",
      fb: "https://www.facebook.com/profile.php?id=100067431952144",
      bg: " ",
      img: "https://i.ibb.co/HL8cJ8W/184261769-109793904611674-1870824795207285378-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      name: "Md. Rajib Hossain",
      phone: "+8801718956111",
      fb: "https://www.facebook.com/rajibhossain081",
      bg: "AB+ ",
      img: "https://i.ibb.co/f0s44MS/315604286-577825797681927-2360652635998523880-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 13,
      name: "Md. Mizanur Rahman",
      phone: "+8801927318054",
      fb: "https://www.facebook.com/profile.php?id=100022574167644",
      bg: "O+ ",
      img: "https://i.ibb.co/6YCGDj9/361391004-666987878798519-1890661252231287851-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      name: "Mr. Pappu",
      phone: "+8801920043209",
      fb: "https://www.facebook.com/profile.php?id=100094838080378",
      bg: "O+ ",
      img: "https://i.ibb.co/QJTGK6m/307761572-436554945199313-7359384348834377768-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 15,
      name: "Md. Shahed Sifat",
      phone: "+8801836978389",
      fb: "https://www.facebook.com/profile.php?id=100071860004974",
      bg: "B+ ",
      img: "https://i.ibb.co/w4grdk8/366147684-298300812624146-2561598296128559689-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 16,
      name: "Md. Hanif Mia",
      phone: "+8801925670387",
      fb: "https://www.facebook.com/profile.php?id=100090407540418",
      bg: "AB+ ",
      img: "https://i.ibb.co/4Sg4Bt1/362296278-973661780571708-7353458924909652475-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 17,
      name: "Md. Rubel Hossain",
      phone: "+8801635789046",
      fb: "https://www.facebook.com/profile.php?id=100090406470716",
      bg: " ",
      img: "https://i.ibb.co/SR3j4K3/315310270-1424644088058487-2353446477072084326-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 18,
      name: "Md. Tamjid Hassan",
      phone: "+8801825856790",
      fb: "https://www.facebook.com/profile.php?id=100090406720448",
      bg: " ",
      img: "https://i.ibb.co/mX5XcMD/315315047-572048744138870-4042142615706033440-n.jpg",
      noimg:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [mem, setMem] = useState(Users);
  const [nameFilter, setNameFilter] = useState("");
  const [bgFilter, setBgFilter] = useState("");

  const filteredMembers = mem.filter((user) => {
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
                <a href={`sms:${user.phone}`} className="message-btn">
                  Message
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

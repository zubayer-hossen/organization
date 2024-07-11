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
    },
    {
      id: 2,
      name: "Md. Abdul Hamid",
      phone: "+8801777489848",
      fb: "https://www.facebook.com/profile.php?id=100011701744675",
      bg: "O+",
      img: "https://i.ibb.co/9yxFLXp/426830264-2081413122258726-6123699642609222257-n.jpg",
    },
    {
      id: 3,
      name: "Md. Abdul Gofur Ghazi",
      phone: "+8801955002079",
      fb: "https://www.facebook.com/mdabdul.gafurgs",
      bg: "AB+",
      img: "https://i.ibb.co/mJhq5BW/404743140-752938503543123-749966827506526231-n.jpg",
    },
    {
      id: 4,
      name: "Md. Khairul Islam",
      phone: "+8801943510559",
      fb: "https://www.facebook.com/khairul.runa",
      bg: "B+",
      img: "https://i.ibb.co/q0FcbHC/56786141-2276896145932611-5688002473457876992-n-removebg-preview.png",
    },
    {
      id: 5,
      name: "Md. Dabir Hossain",
      phone: "+8801916615253",
      fb: "https://www.facebook.com/md.dobir.927",
      bg: " ",
      img: "https://i.ibb.co/8Y3p1Z8/48407502-817136068678772-5211327662710063104-n.jpg",
    },
    {
      id: 6,
      name: "Md. Arafat Hossain",
      phone: "+8801322502908",
      fb: "https://www.facebook.com/profile.php?id=100095113609182",
      bg: " ",

      img: "https://i.ibb.co/9V0TC9x/433141171-255852980928487-4173211480964008311-n.jpg",
    },
    {
      id: 7,
      name: "Md. Nurullah Bahar",
      phone: "+8801925-377100",
      fb: "https://www.facebook.com/profile.php?id=100082678175634",
      bg: " ",
      img: "https://i.ibb.co/PxzJ4zd/307684449-140415185391087-141971134215510242-n.jpg",
    },
    {
      id: 8,
      name: "Md. Waiskuruni Hasan Emon",
      phone: "+8801926926592",
      fb: "https://www.facebook.com/mdemon.hassan.756",
      bg: " ",
      img: "https://i.ibb.co/84RqN2g/232969609-2637144353258545-4009724017019554300-n.jpg",
    },
    {
      id: 9,
      name: "Md. Zubayer Hossen",
      phone: "+8801580856397",
      fb: "https://www.facebook.com/zubayer.hossen.359",
      bg: "A+ ",
      img: "https://i.ibb.co/93LcMFY/445234481-1917409708688880-8235258242458060738-n.jpg",
    },
    {
      id: 10,
      name: "Md. Abdus Selim",
      phone: "+8801635559960",
      fb: "https://www.facebook.com/abdusselim999",
      bg: " O+",
      img: "https://i.ibb.co/18cNh2Z/IMG-4399.jpg",
    },

    {
      id: 11,
      name: "Md Rahmat Ali Ghazi",
      phone: "+8801704456453",
      fb: "https://www.facebook.com/profile.php?id=100067431952144",
      bg: " ",
      img: "https://i.ibb.co/HL8cJ8W/184261769-109793904611674-1870824795207285378-n.jpg",
    },
    {
      id: 12,
      name: "Md. Alamgir Hossain",
      phone: "+8801918606141",
      fb: "https://facebook.com/alamin",
      bg: " ",
    },
    {
      id: 13,
      name: "Md. Abul Hossain",
      phone: "+8801909201205",
      fb: "https://www.facebook.com/profile.php?id=61557017525422",
      bg: " ",
      img: "https://i.ibb.co/pPnvX3p/430744997-122103096860233917-4795018671272026673-n.jpg",
    },
    {
      id: 14,
      name: "Md. Abu Hanif",
      phone: "+8801",
      fb: "https://facebook.com/alamin",
      bg: " ",
    },
    {
      id: 15,
      name: "Md. Salauddin Ghazi",
      phone: "+8801947635296",
      fb: "https://www.facebook.com/profile.php?id=100075744820503",
      bg: " ",
      img: "https://i.ibb.co/s5Q2hvb/263114271-104340768767417-4139535908728513384-n.jpg",
    },
    {
      id: 16,
      name: "Md. Shariful Islam",
      phone: "+8801",
      fb: "https://facebook.com/alamin",
      bg: " ",
    },
    {
      id: 17,
      name: "Md Masum Billah (Police)",
      phone: "+8801644005054",
      fb: "https://www.facebook.com/profile.php?id=100006065269196",
      bg: "A+",
      img: "https://i.ibb.co/N2wyyMR/402131457-3655844797960993-6440285279220399332-n.jpg",
    },

    {
      id: 18,
      name: "Md. Anamul Khan",
      phone: "+8801403155489",
      fb: "https://www.facebook.com/profile.php?id=100086113183391",
      bg: "B+",
      img: "https://i.ibb.co/m915fgp/378177668-272269378986833-2009469853413511977-n.jpg",
    },
    {
      id: 19,
      name: "Md. Mamun Ghazi",
      phone: "+8801974645992",
      fb: "https://www.facebook.com/md.almamun.mamun.779857",
      bg: " ",
      img: "https://i.ibb.co/jymC1Vq/355475035-972069970502460-8557859199558929454-n.jpg",
    },
    {
      id: 20,
      name: "Md. Hafiz Khan",
      phone: "+8801612217362",
      fb: "https://www.facebook.com/profile.php?id=61555737064408",
      bg: "O+",
      img: "https://i.ibb.co/TRFvSR2/423777597-122111665496191235-7893523927377126281-n.jpg",
    },
    {
      id: 21,
      name: "Md. Rasel Hossain",
      phone: "+8801757222168",
      fb: "https://www.facebook.com/profile.php?id=100054033517203",
      bg: " ",
    },
    {
      id: 22,
      name: "Md. Alamin Hossain",
      phone: "+8801951993548",
      fb: "https://www.facebook.com/",
      bg: " ",
    },
    {
      id: 23,
      name: "MD. Saiduzzaman",
      phone: "+8801987040722",
      fb: "https://www.facebook.com/md.saiduzzaman.562",
      bg: " ",
    },
    {
      id: 24,
      name: "Md. Karimul Hossain",
      phone: "+8801914680031",
      fb: "https://www.facebook.com/mdkarimul.hossain.16",
      bg: "B+",
    },
    {
      id: 25,
      name: "Md. Ekram Hossain",
      phone: "+8801",
      fb: "https://www.facebook.com/profile.php?id=100090128765352",
      bg: " ",
    },
    {
      id: 26,
      name: "Md. Mamun (Junior)",
      phone: "+8801990206039",
      fb: "https://www.facebook.com/profile.php?id=100075744820503",
      bg: " ",
    },
    {
      id: 27,
      name: "Md. Milon Hossain",
      phone: "+8801979727660",
      fb: "https://www.facebook.com/profile.php?id=100079542488204",
      bg: " ",
    },
    {
      id: 28,
      name: "Md. Huzzaitullah",
      phone: "+8801719698703",
      fb: "https://www.facebook.com/Hujjatulla698",
      bg: " ",
    },
    {
      id: 29,
      name: "Md. Sabbir (Senior)",
      phone: "+8801",
      fb: "https://facebook.com/zubayer",
      bg: " ",
    },
    {
      id: 30,
      name: "Md. Israfil Hossain",
      phone: "+8801614303419",
      fb: "https://www.facebook.com/mdisrafil.hossen.7906",
      bg: " ",
    },
    {
      id: 31,
      name: "Md. Ibrahim Hossain",
      phone: "+8801966042720",
      fb: "https://facebook.com/zubayer",
      bg: " ",
    },
    {
      id: 32,
      name: "Md. Monjurul Islam",
      phone: "+880",
      fb: "https://www.facebook.com/monjurul.shohan",
      bg: "AB+",
    },

    {
      id: 33,
      name: "Md. Emon Hossain",
      phone: "+8801988969498",
      fb: "https://facebook.com/zubayer",
      bg: " ",
    },
    {
      id: 34,
      name: "Md. Kaiyum Hossain",
      phone: "+8801974115611",
      fb: "https://www.facebook.com/kaiyum.hossain.184",
      bg: " ",
    },
    {
      id: 35,
      name: "Md. Ahad Islam",
      phone: "+8801935748473",
      fb: "https://www.facebook.com/profile.php?id=61552460981139",
      bg: " ",
    },
    {
      id: 36,
      name: "Md. Mortuza Abdullah",
      phone: "+8801980611813",
      fb: "https://www.facebook.com/profile.php?id=100018367050679",
      bg: " ",
    },
    {
      id: 37,
      name: "Md. Babu (Senior)",
      phone: "+8801947635296",
      fb: "https://www.facebook.com/profile.php?id=100088550280911",
      bg: " ",
    },
    {
      id: 38,
      name: "Md. Ahsanullah",
      phone: "+8801",
      fb: "https://facebook.com/alamin",
      bg: " ",
    },
    {
      id: 39,
      name: "Md. Jamil Ahmed",
      phone: "+8801615323067",
      fb: "https://www.facebook.com/profile.php?id=100016686329309",
      bg: "B+",
    },
    {
      id: 40,
      name: "Md. Shojib Hossain",
      phone: "+8801",
      fb: "https://facebook.com/zubayer",
      bg: " ",
    },
    {
      id: 41,
      name: "Md. Rakibul Hossain",
      phone: "+8801",
      fb: "https://facebook.com/alamin",
      bg: " ",
    },
    {
      id: 42,
      name: "Md. Ashraful Islam",
      phone: "+8801",
      fb: "https://facebook.com/alamin",
      bg: " ",
    },
    {
      id: 43,
      name: "Md. Alamin (Junior)",
      phone: "+8801",
      fb: "https://facebook.com/zubayer",
      bg: " ",
    },
    {
      id: 44,
      name: "Md. Nasim Hossain",
      phone: "+8801973330483",
      fb: "https://www.facebook.com/profile.php?id=100011694180747",
      bg: " ",
    },
    {
      id: 45,
      name: "Md. Ruhul Amin",
      phone: "+8801612217362",
      fb: "https://www.facebook.com/profile.php?id=100070289626786",
      bg: " ",
    },
    {
      id: 46,
      name: "Md. Sajjad Hossain",
      phone: "+8801772013327",
      fb: "https://www.facebook.com/sajjad.hossain.7140",
      bg: " ",
    },
    {
      id: 47,
      name: "Md. Abdus Salam",
      phone: "+8801",
      fb: "https://facebook.com/zubayer",
      bg: " ",
    },
    {
      id: 48,
      name: "Md. Naem Hossain",
      phone: "+8801908161030",
      fb: "https://www.facebook.com/profile.php?id=100070064234303",
      bg: " ",
    },
    {
      id: 49,
      name: "Md. Mainuddin",
      phone: "+8801992431113",
      fb: "https://www.facebook.com/md.mamun.52090",
      bg: " ",
    },
    {
      id: 50,
      name: "Md. Liton Sarder",
      phone: "+8801",
      fb: "https://www.facebook.com/md.litonsardar.9",
      bg: " ",
    },
    // Add more user objects here as needed
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
              <img src={user.img} alt={user.name} className="member-pic" />
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

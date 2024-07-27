import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const PresidentInfo = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/hLDf0bS/378719501-824372939341277-437632052074849597-n.jpg"
          alt=""
          className="president-pic"
        />
      </div>
      <div className="info-content">
        <h2>ইসমাইল তারেক</h2>
        <p>পেশা: Member of NSI BD</p>
        <p>যোগাযোগ: ismailhossen@gmail.com | +8801950252338</p>
        <p>রক্তের গ্রুপ: B+</p>
        <div className="speech">
          <h3>সদস্যদের জন্য বার্তা:</h3>
          <p>
            "একসাথে, আমরা মহান কাজ করতে পারি। আমাদের সংগঠন সেবার ভিত্তির উপর
            গঠিত, এবং এমন একটি নিবেদিত এবং উদ্যমী দলকে নেতৃত্ব দেওয়া আমার জন্য
            সম্মানের। চলুন আমরা কঠোর পরিশ্রম চালিয়ে যাই এবং আমাদের সম্প্রদায়ে
            ইতিবাচক প্রভাব ফেলি।"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresidentInfo;

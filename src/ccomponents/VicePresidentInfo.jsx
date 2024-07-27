import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const VicePresidentInfo = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/q0FcbHC/56786141-2276896145932611-5688002473457876992-n-removebg-preview.png"
          alt=""
          className="president-pic"
        />
      </div>
      <div className="info-content">
        <h2>জি এম খায়রুল ইসলাম</h2>
        <p>পেশা: RFL কোম্পানির মার্কেটার</p>
        <p>যোগাযোগ: gmkhairul@gmail.com | +8801943510559</p>
        <p>রক্তের গ্রুপ: B+</p>
        <div className="speech">
          <h3>সদস্যদের জন্য বার্তা:</h3>
          <p>
            "প্রিয় সদস্যবৃন্দ, আপনার সহ-সভাপতি হিসেবে কাজ করা আমার জন্য
            সম্মানের। একসাথে, আসুন আমরা সেবা এবং সম্প্রদায়ের প্রভাবের পথে
            আমাদের যাত্রা অব্যাহত রাখি। আমাদের উত্সর্গ এবং ঐক্য আমাদের শক্তি।
            আসুন আমরা একসাথে কাজ করি এবং একটি স্থায়ী পরিবর্তন আনার লক্ষ্যে আরও
            উচ্চতা অর্জন করি। আপনার প্রতিশ্রুতি এবং উত্সাহের জন্য ধন্যবাদ।"
          </p>
        </div>
      </div>
    </div>
  );
};

export default VicePresidentInfo;

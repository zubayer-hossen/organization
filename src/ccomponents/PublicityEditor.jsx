import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const PublicityEditor = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/r0m3cCh/274514532-1390772474685942-2679935927612332077-n.jpg"
          alt=""
          className="president-pic"
        />
      </div>
      <div className="info-content">
        <h2>জুবায়ের হোসেন</h2>
        <p>পেশা: Web Developer</p>
        <p>যোগাযোগ: zubayerhossen914@gmail.com | +8801580856397</p>
        <p>রক্তের গ্রুপ: A+</p>
        <div className="speech">
          <h3>সদস্যদের জন্য বার্তা:</h3>
          <p>
            "প্রিয় বন্ধুরা এবং সহ সদস্যবৃন্দ, আমি আপনার প্রচার সম্পাদক হিসেবে
            দায়িত্ব পালন করতে পেরে অত্যন্ত গর্বিত এবং উৎসাহী। আমার ভূমিকা
            শুধুমাত্র তথ্য প্রচারের জন্য নয়; এটি আমাদের সম্মিলিত কণ্ঠস্বরকে
            উজ্জ্বল করা এবং আমাদের প্রভাব প্রদর্শনের জন্য। একসাথে, আসুন আমরা
            যোগাযোগের শক্তিকে কাজে লাগিয়ে আমাদের সম্প্রদায়ের মধ্যে কর্ম ও
            ঐক্যকে অনুপ্রাণিত করি। আমাদের সাফল্যের চাবিকাঠি হল আপনার সমর্থন এবং
            অংশগ্রহণ। এই দায়িত্ব আমাকে দেওয়ার জন্য আপনাকে ধন্যবাদ। আসুন আমাদের
            সংগঠনকে আগের চেয়ে উজ্জ্বল করি!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicityEditor;

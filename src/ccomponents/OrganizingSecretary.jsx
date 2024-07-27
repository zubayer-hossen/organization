import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const OrganizingSecretary = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/1rQNypn/Screenshot-2024-07-07-024108.png"
          alt=""
          className="president-pic"
        />
      </div>
      <div className="info-content">
        <h2>মোঃ আল মামুন</h2>
        <p>পেশা: স্টুডেন্ট</p>
        <p>যোগাযোগ: almamun@gmail.com | +8801974645992</p>
        <p>রক্তের গ্রুপ: B+</p>
        <div className="speech">
          <h3>সদস্যদের জন্য বার্তা:</h3>
          <p>
            "প্রিয় সদস্যবৃন্দ, আপনাদের সংগঠক সচিব হিসাবে কাজ করা আমার জন্য
            সম্মানের। আমরা একসাথে আমাদের প্রতিটি প্রচেষ্টায় শ্রেষ্ঠত্ব অর্জনের
            জন্য চেষ্টা করি। চলুন আমরা আমাদের সম্প্রদায়ের উপকারের জন্য
            প্রভাবশালী ইভেন্ট এবং উদ্যোগগুলি সংগঠিত করতে হাতে হাত মিলিয়ে কাজ
            করি। আমাদের উজ্জ্বল ভবিষ্যতের পথে আপনার উৎসর্গ এবং সমর্থন অমূল্য।
            আপনার প্রতিশ্রুতির জন্য আপনাকে ধন্যবাদ।"
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizingSecretary;

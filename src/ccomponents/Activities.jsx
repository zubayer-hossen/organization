import React from "react";
import "./Activities.css"; // Import the CSS file for styling

const Activities = () => {
  return (
    <div className="activities-container">
      <h2>আমাদের কার্যক্রম</h2>
      <div className="activity-card">
        <div className="activity-img">
          <img
            src="https://i.ibb.co/hmmcxcC/12062417-4881929.jpg"
            alt="কার্যক্রম ১"
          />
        </div>
        <div className="activity-details">
          <h3>সম্প্রদায় সেবা অভিযান</h3>
          <p>
            আমাদের সংগঠন আমাদের সম্প্রদায় সেবা অভিযান মাধ্যমে দরিদ্রদের জীবন
            উন্নত করতে প্রতিশ্রুতিবদ্ধ। আমরা স্বেচ্ছাসেবকদের বিভিন্ন কার্যকর
            কার্যক্রমে নিযুক্ত করি, যেমন রক্তদান অভিযান সংগঠিত করা, দরিদ্রদের
            সহায়তা প্রদান করা এবং শিক্ষামূলক ও সাংস্কৃতিক অনুষ্ঠান আয়োজন করা।
            একসাথে কাজ করে, আমরা সম্প্রদায়ের অনুভূতি বৃদ্ধি করতে, নাগরিক
            দায়িত্ব প্রচার করতে এবং একটি স্থায়ী ইতিবাচক প্রভাব তৈরি করতে
            লক্ষ্য করি। আমাদের সাথে যোগদান করুন এবং সবার জন্য একটি ভালো ভবিষ্যত
            গঠনে অংশ নিন।
          </p>
        </div>
      </div>

      <div className="activity-card">
        <div className="activity-img">
          <img
            src="https://i.ibb.co/PhRQqqZ/15272783-5581651.jpg"
            alt="কার্যক্রম ২"
          />
        </div>
        <div className="activity-details">
          <h3>ক্রীড়া প্রতিযোগিতা</h3>
          <p>
            আমাদের সংগঠন শারীরিক ফিটনেস, দলগত কাজ এবং সম্প্রদায়ের মনোবল
            প্রচারের জন্য গর্বের সাথে একটি ক্রীড়া প্রতিযোগিতা আয়োজন করে। এই
            ইভেন্টটি সকল বয়সের অংশগ্রহণকারীদের বিভিন্ন ক্রীড়ায় বন্ধুত্বপূর্ণ
            প্রতিযোগিতার জন্য একত্রিত করে, সাহচর্য এবং স্বাস্থ্যকর জীবনধারা
            প্রচার করে। আমাদের প্রতিযোগিতার মাধ্যমে আমরা সম্প্রদায়কে একত্রিত
            করতে, সক্রিয় জীবনধারা উৎসাহিত করতে এবং স্থানীয় প্রতিভাকে উজ্জ্বল
            করতে লক্ষ্য করি। আমাদের সাথে যোগদান করুন এবং ক্রীড়া মনোভাব ও ঐক্য
            উদযাপনের জন্য একটি উত্তেজনাপূর্ণ অভিজ্ঞতা উপভোগ করুন।
          </p>
        </div>
      </div>

      <div className="activity-card">
        <div className="activity-img">
          <img
            src="https://i.ibb.co/r6RwXTw/30118682-7664295.jpg"
            alt="কার্যক্রম ৩"
          />
        </div>
        <div className="activity-details">
          <h3>সাংস্কৃতিক উৎসব</h3>
          <p>
            আমাদের সংগঠন সম্প্রদায়ের সমৃদ্ধ এবং বৈচিত্র্যময় ঐতিহ্য উদযাপন করতে
            একটি সাংস্কৃতিক উৎসব আয়োজন করে। এই উজ্জ্বল ইভেন্টটি পারফরম্যান্স,
            আর্ট প্রদর্শনী এবং ঐতিহ্যবাহী কার্যকলাপগুলি নিয়ে আসে, যা স্থানীয়
            প্রতিভাদের তাদের দক্ষতা প্রদর্শনের একটি প্ল্যাটফর্ম প্রদান করে।
            মানুষকে একত্রিত করে, আমরা সাংস্কৃতিক সচেতনতা প্রচার করতে,
            সম্প্রদায়ের বন্ধন শক্তিশালী করতে এবং আমাদের অনন্য ঐতিহ্য সংরক্ষণ
            করতে লক্ষ্য করি। আমাদের সাথে যোগদান করুন এবং সংস্কৃতি, ঐক্য ও
            সৃজনশীলতার একটি আনন্দময় উদযাপন উপভোগ করুন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;

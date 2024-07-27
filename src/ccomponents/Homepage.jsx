import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const breakingNewsProps = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-100%)" },
    config: { duration: 10000 },
    loop: true,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.homepage}>
      {/* Breaking News Section */}
      <div className={styles.breakingNews}>
        <animated.div style={breakingNewsProps} className={styles.newsText}>
          সর্বশেষ সংবাদ: দেশের পরিস্থিতি বিবেচনা করে সাময়িক সময়ের জন্য আমাদের
          সাংগঠনিক কার্যক্রম বন্ধ থাকবে !
        </animated.div>
      </div>

      {/* Banner Image Slider */}
      <div className={styles.bannerSlider} id="banner_area">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://i.ibb.co/9yG5YGn/banner1.jpg" alt="ব্যানার ১" />
          </div>
          <div>
            <img src="https://i.ibb.co/YTv9xyD/banner2.jpg" alt="ব্যানার ২" />
          </div>
          <div>
            <img src="https://i.ibb.co/WyDfXyn/banner3.jpg" alt="ব্যানার ৩" />
          </div>
        </Slider>
      </div>

      {/* National Section */}
      <div className={styles.nationalSection} id="national">
        {/* National Anthem Section */}
        <div className={styles.nationalAnthem}>
          <h2>জাতীয় সংগীত</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9AL7YVKNmlc?si=bRvuA8EPSBYH9M-M"
            title="YouTube ভিডিও প্লেয়ার"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        {/* Notice Board Section */}
        <div className={styles.noticeBoard}>
          <h2>নোটিশ বোর্ড</h2>
          <ul className="notice">
            <li className={styles.listItem}>রক্তদান শিবির - ১৫ই জুলাই</li>
            <li className={styles.listItem}>
              ক্রীড়া প্রতিযোগিতা - ২০শে জুলাই
            </li>
            <li className={styles.listItem}>
              সাংস্কৃতিক অনুষ্ঠান - ২৫শে জুলাই
            </li>
          </ul>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className={styles.upcomingEvents}>
        <h2>আসন্ন ইভেন্ট</h2>
        <ul>
          <li className={styles.listItem}>কোনো ইভেন্ট নাই </li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;

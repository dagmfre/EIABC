import Navbar from "../blocks/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../styles/FrontSection.css";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const slides = [
  { image: "imagess/lideta2.png" },
  { image: "imagess/lideta3.png" },
  { image: "imagess/lideta4.png" },
  { image: "imagess/lideta5.png" },
];

const FrontSection = () => {
  return (
    <>
      <Navbar />
      <Swiper
        spaceBetween={30}
        effect="fade"
        speed={1700}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`swipe-cont`}>
              <div
                className="front-images-cont"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  position: "absolute",
                  width: "100%",
                }}
              ></div>
              <div className="front-text-cont">
                <div className="slide-text-cont">
                  <div className="slide-text">
                    <p>
                      <span>EIABC ግቢ ጉባኤ</span> ከማህበርም ባሻገር!
                    </p>
                  </div>
                  <div className="slide-navigation-cont">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt culpa, consequatur, tempore quaerat perspiciatis
                      nobis quam excepturi possimus aspernatur perferendis,
                      rerum vitae dolorum eligendi molestiae? Voluptatem dolorum
                      sed atque enim.
                    </p>
                    <div className="slide-navigation">
                      <div className="swiper-button-next custom-next">
                        <EastIcon />
                      </div>
                      <div className="swiper-button-prev custom-prev">
                        <WestIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FrontSection;

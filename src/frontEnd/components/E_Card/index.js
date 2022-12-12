import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const E_Card = () => {
  return (
    <div>
      <Swiper
        style={{ height: "200px", width: "400px" }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}>
        <SwiperSlide
          style={{
            paddingTop: "50px",
            textAlign: "center",
            backgroundColor: "rgb(54, 94, 77)",
          }}>
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            paddingTop: "50px",
            textAlign: "center",
            backgroundColor: "rgb(218, 12, 218)",
          }}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            paddingTop: "50px",
            textAlign: "center",
            backgroundColor: "rgb(0, 68, 255)",
          }}>
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            paddingTop: "50px",
            textAlign: "center",
            backgroundColor: "rgb(35, 99, 19)",
          }}>
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          style={{
            paddingTop: "50px",
            textAlign: "center",
            backgroundColor: "rgb(180, 10, 47)",
          }}>
          Slide 5
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default E_Card;

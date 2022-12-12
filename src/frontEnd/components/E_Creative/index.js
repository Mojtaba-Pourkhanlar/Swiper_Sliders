import { EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const E_Creative = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        style={{ height: "250px", width: "400px" }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}>
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

export default E_Creative;

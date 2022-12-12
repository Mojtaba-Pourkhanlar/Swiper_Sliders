import { Parallax, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";

const Parallax_S = () => {
  const parallaxBg = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "500px",
        }}
        speed={700}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}>
        <SwiperSlide>
          <Box
            data-swiper-parallax="-23%"
            slot="container-start"
            sx={[
              parallaxBg,
              {
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
              },
            ]}></Box>

          <Box sx={{ width: "50%", m: "100px 50px 0" }}>
            <Box data-swiper-parallax="-300">
              <Typography variant="h2"> Slide 1</Typography>
            </Box>
            <Box data-swiper-parallax="-200" my={5}>
              <Typography variant="h4"> Subtitle</Typography>
            </Box>
            <Box data-swiper-parallax="-100">
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            data-swiper-parallax="-23%"
            slot="container-start"
            sx={[
              parallaxBg,
              {
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
              },
            ]}></Box>
          <Box sx={{ width: "50%", m: "100px 50px 0" }}>
            <Box data-swiper-parallax="-300">
              <Typography variant="h2"> Slide 2</Typography>
            </Box>
            <Box data-swiper-parallax="-200" my={5}>
              <Typography variant="h4"> Subtitle</Typography>
            </Box>
            <Box data-swiper-parallax="-100">
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            data-swiper-parallax="-23%"
            slot="container-start"
            sx={[
              parallaxBg,
              {
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
              },
            ]}></Box>
          <Box sx={{ width: "50%", m: "100px 50px 0" }}>
            <Box data-swiper-parallax="-300">
              <Typography variant="h2"> Slide 3</Typography>
            </Box>
            <Box data-swiper-parallax="-200" my={5}>
              <Typography variant="h4"> Subtitle</Typography>
            </Box>
            <Box data-swiper-parallax="-100">
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Parallax_S;

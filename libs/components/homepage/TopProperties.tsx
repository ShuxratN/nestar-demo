import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./TopPropertyCard";
import property from "@/pages/property";

const TopProperties = () => {
    const [topProperties, setTopProperties] = useState<number[]>([
      1, 2, 3, 4, 4, 5, 6, 7,
    ]);
    return (
      <Stack className={"top-properties"}>
        <Stack className={"container"}>
          <Stack className={"info-box"}>
            <Box className={"left"}>
              <span>Top Properties</span>
              <p>Top properties based on views</p>
            </Box>
            <Box className={"right"}>
              <div className={"pagination-box"}>
                <WestIcon className={"swiper-top-prev"} />
                <div className={"swiper-top-pagination"}></div>
                <EastIcon className={"swiper-top-next"} />
              </div>
            </Box>
          </Stack>
  
          <Stack className={"card-box"}>
            {property.length === 0 ? (
              <Box className={"empty-list"}>No Top Properties Available</Box>
            ) : (
              <Swiper
                className={"top-property-swiper"}
                slidesPerView={"auto"}
                spaceBetween={15}
                navigation={{
                  nextEl: ".swiper-top-next",
                  prevEl: ".swiper-top-prev",
                }}
                pagination={{
                  el: ".swiper-top-pagination",
                  clickable: true,
                }}
              >
                {topProperties.map((property, index) => (
                  <SwiperSlide className={"top-property-slide"}>
                    <TopPropertyCard />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  };
  export default TopProperties;
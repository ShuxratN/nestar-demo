// components/homepage/TopAgents.tsx
import React from "react";
import { Stack, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentCard from "./TopAgentCard";

import "swiper/css";
import "swiper/css/navigation";

const TopAgents: React.FC = () => {
  const agents = [
    { name: "Alice Smith", role: "Top Agent" },
    { name: "Emma Brown", role: "Senior Agent" },
    { name: "Anna Johnson", role: "Real Estate Expert" },
    { name: "Sophia Wilson", role: "Luxury Agent" },
    { name: "Olivia Martinez", role: "Residential Expert" },
    { name: "Liam Anderson", role: "Investment Advisor" },
    { name: "Mia Thomas", role: "Real Estate Consultant" },
  ];

  return (
    <Stack className="top-agents">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Top Agents</span>
            <p>Our Top Agents always ready to serve you</p>
          </Box>
          <Box className="right">
            <div className="more-box">
              <span>See All Agents</span>
              <img src="/img/icons/rightup.svg" alt="See All" />
            </div>
          </Box>
        </Stack>

        <Stack className="wrapper">
          <Box className="switch-btn swiper-agents-prev">
            <ArrowBackIosNewIcon />
          </Box>

          <Box className="card-wrapper">
            <Swiper
              className="top-agents-swiper"
              slidesPerView={"auto"}
              spaceBetween={29}
              navigation={{
                nextEl: ".swiper-agents-next",
                prevEl: ".swiper-agents-prev",
              }}
            >
              {agents.map((agent, index) => (
                <SwiperSlide className="top-agents-slide" key={index}>
                  <TopAgentCard name={agent.name} role={agent.role} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Box className="switch-btn swiper-agents-next">
            <ArrowBackIosNewIcon />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopAgents;
// components/homepage/TopAgentCard.tsx
import React from "react";
import { Stack, Box } from "@mui/material";

interface TopAgentCardProps {
  name: string;
  role: string;
}

const TopAgentCard: React.FC<TopAgentCardProps> = ({ name, role }) => {
  return (
    <Stack className="top-agent-card">
      <img src={"/img/profile/girl.svg"} alt="" />

      <strong>{name}</strong>
      <span>{role}</span>
    </Stack>
  );
};

export default TopAgentCard;
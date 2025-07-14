import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopPropertyCard: React.FC = () => {
  return (
    <Stack className="top-card-box">
      <Box
        className="card-img"
        sx={{
          backgroundImage: 'url("/img/apartmentMain.png")',
        }}
      >
        <div>$420000</div>
      </Box>

      <Box className="info">
        <strong className="title">Run Will Buildings</strong>
        <p className="desc">Seoul Gangnam Apartments</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="bed" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="rooms" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="size" />
            <span>250 m²</span>
          </div>
        </div>

        <Divider sx={{ mt: "15px", mb: "17px" }} />

        <div
          className="bott"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>Rent</p>
          <div
            className="view-like-box"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">50</Typography>
            <IconButton color="default">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">250</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TopPropertyCard;
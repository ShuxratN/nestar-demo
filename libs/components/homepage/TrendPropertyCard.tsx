import React from "react";
import { Stack, Box, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard: React.FC = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        className="card-img"
        sx={{
          backgroundImage: 'url("/img/banner/types/house.webp")',
        }}
      >
        <div>$620000</div>
      </Box>

      {/* Info section */}
      <Box className="info" sx={{ mt: 2 }}>
        <strong className="title">Equestrian Family Home</strong>
        <p className="desc">Good wills</p>

        {/* Options */}
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
            <img src="/img/icons/expand.svg" alt="area" />
            <span>220 m²</span>
          </div>
        </div>

        {/* Divider */}

        {/* Bottom section */}
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

export default TrendPropertyCard;
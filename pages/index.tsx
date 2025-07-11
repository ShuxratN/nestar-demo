import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "./property/libs/components/layout/LayuotHome";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);

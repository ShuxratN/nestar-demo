import withLayoutBasic from "@/libs/components/layout/LayuotBasic";
import { Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";

import { NextPage } from "next";

const PropertyList: NextPage = () => {
    console.log("PROPERTYLIST COMPONNENT - PAGES ROUTER");
    return (
    <>
        
        <Container> PROPERTY LIST</Container>
      
    </>
    );
};

export default withLayoutBasic(PropertyList);
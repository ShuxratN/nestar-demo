import withLayoutBasic from "@/libs/components/layout/LayuotBasic";
import { Container, Stack } from "@mui/material";
import { green } from "@mui/material/colors";

import { NextPage } from "next";

const PropertyList: NextPage = () => {
    console.log("PROPERTYLIST COMPONNENT - PAGES ROUTER");
    return (
        <div style={{ margin: "20px 0"}}> 
         <Stack className="container"> PROPERTY LIST</Stack>
        </div>
       
    );
};

export default withLayoutBasic(PropertyList);
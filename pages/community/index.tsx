import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../property/libs/components/layout/LayuotBasic";

const Community: NextPage = () => {
    console.log("COMMUNITY COMPONNENT - PAGES ROUTER");
    const [title, setTitle] = useState<string>("hello");
    return (
        <div>
             COMMUNITY {" "}
             <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}> 
                PressMe
             </button>
        </div>

    );
};

export default withLayoutBasic(Community);
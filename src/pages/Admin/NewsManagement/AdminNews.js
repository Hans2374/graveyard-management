import React from "react";
import {
  Box,
  Button,
} from "@mui/material";
import TextEditor from "../../../components/TextEditor";



function AdminNews() {
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: "3px", backgroundColor: "white" }}
      >
        <Box sx={{ width:"100%", height:"100%", margin:"0px 0px "}}>
          <TextEditor/>
          <Button sx={{backgroundColor: "var(--primary-color)",
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px 100px 5px 100px",
                  textTransform: "none",
                  marginTop:"20px"
                  }}>
            Lưu
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AdminNews;

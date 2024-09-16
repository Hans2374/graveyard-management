import React from "react";
import {
  Box,
  Button,
  IconButton,
  TextField
} from "@mui/material";
import TextEditor from "../../../components/TextEditor";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ServiceTable from "../../../components/TableData/ServiceTable";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import LinkIcon from "@mui/icons-material/Link";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";




function AdminNews() {
  const [reportText, setReportText] = React.useState("");

  const handleTextChange = (e) => {
    if (e.target.value.length <= 1000) {
      // Limit to 1000 characters
      setReportText(e.target.value);
    }
  };
  return (
    <>
      <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 2, margin:"30px 50px"}}>
              {/* Icons for formatting */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <IconButton aria-label="bold">
                  <FormatBoldIcon />
                </IconButton>
                <IconButton aria-label="italic">
                  <FormatItalicIcon />
                </IconButton>
                <IconButton aria-label="underline">
                  <FormatUnderlinedIcon />
                </IconButton>
                <IconButton aria-label="add image">
                  <InsertPhotoIcon />
                </IconButton>
                <IconButton aria-label="add link">
                  <LinkIcon />
                </IconButton>
              </Box>
              <TextField
                value={reportText}
                onChange={handleTextChange}
                multiline
                rows={11}
                placeholder="Nhập báo cáo công việc..."
                fullWidth
                variant="outlined"
                inputProps={{
                  maxLength: 1000,
                }}
                helperText={`${reportText.length}/1000 ký tự`}
              />
            </Box>
            <Button sx={{backgroundColor: "var(--primary-color)",
                  color: "black",
                  borderRadius: "10px",
                  padding: "5px 100px 5px 100px",
                  textTransform: "none",
                  marginTop:"20px",
                  }}>
            Lưu
          </Button>
    </>
  );
}

export default AdminNews;

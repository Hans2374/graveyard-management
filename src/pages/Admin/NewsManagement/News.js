import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
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

function News() {
  const [open, setOpen] = useState(false);
  const [reportText, setReportText] = React.useState("");

  const handleTextChange = (e) => {
    if (e.target.value.length <= 1000) {
      // Limit to 1000 characters
      setReportText(e.target.value);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          marginLeft: "50px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm tin tức"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              width: "500px",
              margin: "0 20px 0 -0",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          variant="outlined"
          placeholder="Thêm điều kiện lọc"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <FilterListIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <IconButton
          sx={{
            backgroundColor: "var(--primary-color)",
            position: "absolute",
            marginLeft: "1040px",
          }}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            backgroundColor: "var(--primary-color)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          <DialogTitle
            sx={{
              backgroundColor: "var(--primary-color)",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Thông tin chi tiết
          </DialogTitle>
          <DialogContent sx={{ width: "600px" }}>
            <Typography sx={{ padding: "10px 10px 0 0", marginTop: "20px" }}>
              Tiêu đề bài viết
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton></IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                bgcolor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                marginTop: "30px",
              }}
            >
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
                rows={10}
                placeholder="Nhập báo cáo công việc..."
                fullWidth
                variant="outlined"
                inputProps={{
                  maxLength: 1000,
                }}
                helperText={`${reportText.length}/1000 ký tự`}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 20px 5px 20px",
                textTransform: "none",
                margin: "0 290px 0 0",
              }}
            >
              Cập nhật
            </Button>

            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 20px 5px 20px",
                textTransform: "none",
              }}
            >
              Đặt lại
            </Button>

            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "black",
                borderRadius: "10px",
                padding: "5px 20px 5px 20px",
                textTransform: "none",
                margin: "0px 15px",
              }}
            >
              Hủy
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          marginLeft: "50px",
          marginTop: "50px",
          height:"430px"
        }}
      >
        <ServiceTable />
      </Box>
    </>
  );
}

export default News;
